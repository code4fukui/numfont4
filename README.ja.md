Here is the Japanese translation of the English markdown chunk:

# numfont4
The Japanese README is here: [README.ja.md](README.ja.md)

3x7ビットの数字フォントです。

## 機能
- 数字 0-9 用の 3x7 ビットフォントを提供します
- フォントパターンの 16 進表現を含む CSV ファイルが含まれています

## 要件
なし

## 使い方
このプロジェクトは、フォントデータからCSVファイルを生成するための2つのJavaScriptファイルを提供しています:

1. `make_font4.js`: 数字0-9の3x7ビットフォントパターンを含む `numfont4.csv` ファイルを生成します。
2. `make_font3.js`: 数字0-9の3x5ビットフォントパターンを含む `numfont3.csv` ファイルを生成します。

生成されたCSVファイルを使用するには、プロジェクトにインポートし、必要に応じてフォントデータを使用することができます。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
