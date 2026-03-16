# numfont4
日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

3x7ビットの数字フォントです。

## 機能
- 数字 0-9 用の 3x7 ビットフォントを提供します
- フォントパターンの16進表現を含むCSVファイルが含まれています

## 使用方法
この簡単な数字ディスプレイフォントを使うには、以下の手順に従ってください:

1. リポジトリをクローンまたはダウンロードします
2. `fonts` ディレクトリ内の `numeric.csv` ファイルを開きます
3. 必要に応じてフォントパターンを使用します

簡単な例として、以下のような Python コードが使用できます:

```python
# Load the font patterns from the CSV file
font_patterns = {}
with open('fonts/numeric.csv', 'r') as f:
    for line in f:
        num, pattern = line.strip().split(',')
        font_patterns[int(num)] = int(pattern, 16)

# Display the number "123"
print_number(123, font_patterns)
```

## リンク
- [GitHub リポジトリ](https://github.com/your-username/simple-numeric-display-font)

## 要件
なし

## 使用方法
このプロジェクトでは、フォントデータからCSVファイルを生成するためのJavaScriptファイルが2つ提供されています:

1. `make_font4.js`: 数字0-9の3x7ビットのフォントパターンを含む `numfont4.csv` ファイルを生成します。
2. `make_font3.js`: 数字0-9の3x5ビットのフォントパターンを含む `numfont3.csv` ファイルを生成します。

生成されたCSVファイルを、プロジェクトにインポートして必要に応じてフォントデータを使用することができます。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
