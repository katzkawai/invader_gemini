# Invader Gemini

## アプリケーション概要

Invader Geminiは、PythonのFlaskフレームワークとHTML5 Canvas、JavaScriptを使用して作成されたシンプルなWebベースのインベーダーゲームです。プレイヤーは宇宙船を操作し、左右に移動しながらエイリアンを撃ち落とします。

## インストール方法

1.  **Pythonのインストール:**
    お使いのシステムにPythonがインストールされていることを確認してください。インストールされていない場合は、[Python公式サイト](https://www.python.org/downloads/)からダウンロードしてインストールしてください。

2.  **プロジェクトのクローン:**
    このリポジトリをローカルにクローンします。
    ```bash
    git clone <リポジトリのURL>
    cd invader_gemini
    ```
    （注: 現在はローカルリポジトリのため、`<リポジトリのURL>` はご自身の環境に合わせてください。）

3.  **仮想環境の作成とアクティベート (推奨):**
    ```bash
    python -m venv venv
    # Linux/macOS
    source venv/bin/activate
    # Windows
    .\venv\Scripts\activate
    ```

4.  **依存関係のインストール:**
    Flaskをインストールします。
    ```bash
    pip install Flask
    ```

## 使い方

1.  **アプリケーションの起動:**
    プロジェクトのルートディレクトリで、以下のコマンドを実行してFlaskアプリケーションを起動します。
    ```bash
    python app.py
    ```

2.  **ブラウザでアクセス:**
    アプリケーションが起動すると、ターミナルに表示されるURL（通常 `http://127.0.0.1:5000`）にWebブラウザでアクセスしてください。

3.  **ゲームの操作:**
    *   **左右移動:** 矢印キーの `←` (左) と `→` (右)
    *   **弾の発射:** `スペースキー`

## 更新履歴

### 2025年7月11日
*   初期プロジェクトセットアップ。
*   Flaskアプリケーションの基本構造 (`app.py`, `templates/index.html`, `static/css/style.css`, `static/js/game.js`) を作成。
*   プレイヤーの移動と弾の発射、エイリアンの描画と基本的な衝突判定を実装。
*   Gitリポジトリを初期化し、最初のコミットを実行。
