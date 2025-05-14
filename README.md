# WebP Conversion

このプロジェクトは、`assets/images`ディレクトリ内にある画像をWebP形式に変換するために設計されています。変換プロセスは、`src/convert.js`ファイルにあるメインスクリプトによって処理され、`src/utils/fileHandler.js`にあるユーティリティ関数を使用してファイル操作を行います。

## 構成

- **src/**
  - **convert.js**: 画像を読み込み、変換し、WebP形式で保存するメインスクリプト。
  - **utils/**
    - **fileHandler.js**: ファイルの読み書きや、画像ファイルパスの取得、変換後のファイル保存を行うユーティリティ関数。

- **assets/**
  - **images/**: 変換対象の画像ファイルが格納されているディレクトリ。

- **package.json**: プロジェクトの依存関係やスクリプトを設定するための構成ファイル。`sharp`などの画像処理ライブラリが指定されています。

## セットアップ手順

1. **リポジトリをクローン**:
   ```
   git clone <repository-url>
   cd webp-conversion-project
   ```

2. **依存関係をインストール**:
   ```
   npm install
   ```

3. **変換スクリプトを実行**:
   ```
   node src/convert.js
   ```

## 使用方法

変換スクリプトを実行すると、`assets/images`ディレクトリ内のポスター画像がWebP形式に変換され、同じディレクトリまたは指定された出力ディレクトリに保存されます。

## License

This project is licensed under the MIT License. See the LICENSE file for more details.