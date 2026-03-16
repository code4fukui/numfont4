# numfont4

English README is here: [README.md](README.md)

日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

3x7ビットの数字フォントです。

## 機能
- 数字0-9用の3x7ビットフォントを提供
- フォントパターンの16進数表現を含むCSVファイルを含む

## 要件
なし

## 使用方法
このプロジェクトでは、フォントデータからCSVファイルを生成するための2つのJavaScriptファイルが提供されています:

1. `make_font4.js`: 数字0-9の3x7ビットフォントパターンを含む`numfont4.csv`ファイルを生成します。
2. `make_font3.js`: 数字0-9の3x5ビットフォントパターンを含む`numfont3.csv`ファイルを生成します。

生成されたCSVファイルを、プロジェクトにインポートして必要に応じてフォントデータを使用することができます。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
