const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { getImagePaths, saveImage } = require('./utils/fileHandler')

const inputDir = path.join(__dirname, '../assets/images')
const outputDir = path.join(__dirname, '../assets/images/webp')

async function convertImagesToWebP() {
    try {
        // Create output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true })
        }

        // Get all image paths from the input directory
        const imagePaths = await getImagePaths(inputDir)

        console.log(`Found ${imagePaths.length} images to convert`)

        // Convert each image to WebP format
        for (const imageInfo of imagePaths) {
            // 相対パスをもとに出力先のパスを生成
            const relativePath = imageInfo.relativePath
            const outputFileName = `${path.basename(relativePath, path.extname(relativePath))}.webp`
            const outputRelativeDir = path.dirname(relativePath)
            const outputFullDir = path.join(outputDir, outputRelativeDir)
            const outputFilePath = path.join(outputFullDir, outputFileName)

            // 出力先のディレクトリが存在しない場合は作成
            if (!fs.existsSync(outputFullDir)) {
                fs.mkdirSync(outputFullDir, { recursive: true })
            }

            // WebPに変換
            await sharp(imageInfo.fullPath)
                .webp({ quality: 80 })
                .toFile(outputFilePath)

            console.log(`Converted: ${relativePath} → ${path.relative(outputDir, outputFilePath)}`)
        }

        console.log('\nAll images have been converted to WebP format.')
    } catch (error) {
        console.error('Error during conversion:', error)
    }
}

convertImagesToWebP()