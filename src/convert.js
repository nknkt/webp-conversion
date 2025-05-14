const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { getImagePaths, saveImage } = require('./utils/fileHandler');

const inputDir = path.join(__dirname, '../assets/images');
const outputDir = path.join(__dirname, '../assets/images/webp');

async function convertImagesToWebP() {
    try {
        // Create output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Get all image paths from the input directory
        const imagePaths = await getImagePaths(inputDir);

        // Convert each image to WebP format
        for (const imagePath of imagePaths) {
            const outputFilePath = path.join(outputDir, `${path.basename(imagePath, path.extname(imagePath))}.webp`);
            await sharp(imagePath)
                .webp({ quality: 80 }) // Set quality for WebP
                .toFile(outputFilePath);
            console.log(`Converted: ${imagePath} to ${outputFilePath}`);
        }

        console.log('All images have been converted to WebP format.');
    } catch (error) {
        console.error('Error during conversion:', error);
    }
}

convertImagesToWebP();