const fs = require('fs')
const path = require('path')

// 再帰的に画像ファイルのパスを取得する関数
const getImagePaths = (directory, baseDir = directory) => {
    let imagePaths = []
    const items = fs.readdirSync(directory, { withFileTypes: true })

    for (const item of items) {
        const fullPath = path.join(directory, item.name)

        if (item.isDirectory()) {
            // サブディレクトリを再帰的に探索
            imagePaths = imagePaths.concat(getImagePaths(fullPath, baseDir))
        } else if (item.isFile()) {
            const ext = path.extname(item.name).toLowerCase()
            if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
                // ベースディレクトリからの相対パスを保持
                const relativePath = path.relative(baseDir, fullPath)
                imagePaths.push({
                    fullPath,
                    relativePath
                })
            }
        }
    }

    return imagePaths
}

// 変換後のファイルを保存する関数
const saveConvertedImage = (outputPath, buffer) => {
    fs.writeFileSync(outputPath, buffer)
}

// モジュールのエクスポート
module.exports = {
    getImagePaths,
    saveConvertedImage
}