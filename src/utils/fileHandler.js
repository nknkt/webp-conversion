const fs = require('fs');
const path = require('path');

// 画像ファイルのパスを取得する関数
const getImagePaths = (directory) => {
    return fs.readdirSync(directory).filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ext === '.jpg' || ext === '.jpeg' || ext === '.png'; // 対応する画像形式
    }).map(file => path.join(directory, file));
};

// 変換後のファイルを保存する関数
const saveConvertedImage = (outputPath, buffer) => {
    fs.writeFileSync(outputPath, buffer);
};

// モジュールのエクスポート
module.exports = {
    getImagePaths,
    saveConvertedImage
};