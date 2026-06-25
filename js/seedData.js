export const INITIAL_SERIES = [
  {
    "id": "phantom",
    "num": "IS#2",
    "title": "ファントムと緋き貴石",
    "image": "./images/phantom.png"
  },
  {
    "id": "mizuki",
    "num": "IS#3",
    "title": "ミヅキと紺碧の樹",
    "image": "./images/mizuki.png"
  },
  {
    "id": "sami",
    "num": "IS#4",
    "title": "探索者と銀氷の果て",
    "image": "./images/sami.png"
  },
  {
    "id": "sarkaz",
    "num": "IS#5",
    "title": "サルカズの炉辺奇談",
    "image": "./images/sarkaz.png"
  },
  {
    "id": "sui",
    "num": "IS#6",
    "title": "歳の界園志異",
    "image": "./images/sui.png"
  }
];

export const INITIAL_ARTICLES = [
  {
    "id": "draft-custom-tags-guide",
    "seriesId": "phantom",
    "title": "【下書き・管理者限定】カスタムMarkdown表記の使用例とリファレンス",
    "category": "検証記事",
    "tags": [
      "システム",
      "下書き",
      "カスタムタグ"
    ],
    "status": "draft",
    "content": "## 統合戦略攻略アーカイブ カスタム表記リファレンス\n\n本ドキュメントは、管理者ダッシュボード（CMS）でのみ表示・プレビュー可能な下書き記事です。攻略記事をより直感的かつ美しく執筆するためのカスタムMarkdownコンポーネントの使用方法をまとめています。\n<br>\n### 1. カスタムバッジ \nバッジを使用して、難易度、オペレーター推奨度、対象テーマをグラフィカルに明示します。\n\n*  [badge: 難易度15 | danger]\n*  [badge: 推奨昇進2 | warning]\n*  [badge: サーミ | info] \n*  [badge: 常設化 | success] \n*  [badge: 臨時契約 | primary] \n<br>\n\n### 2. 推奨オペレーターカードグリッド\n複数のおすすめオペレーターや戦術をグリッド（並列カード）で並めて表示します。\n\n[card-grid]\n[card: ムリナール | スキル3「潮汐をも穿つ光」による圧倒的広範囲・高火力物理ダメージ。分隊の中核。 | 優先度: 極めて高]\n[card: ケルシー | モンスターによる確定ダメージで、高防御力・高術耐性のボスをも容易に突破。 | 優先度: 高]\n[card: テキサス (異格) | スキル2・3の差し込み術ダメージとスタンによる臨機応変な妨害。 | 優先度: 極めて高]\n[/card-grid]\n<br>\n\n### 3. 攻略ステップリスト \nタイムラインや配置順序をステップ形式で可視化します。\n\n[steps]\n[step: 序盤：コスト回収と布陣準備]\n先鋒（イネス、テンニンカ等）を配置し、敵をブロックしつつ後半の主力配置に必要な配置コストを稼ぎます。\n[/step]\n[step: 中盤：高台火力と回復の展開]\n高台に術師や狙撃（ティフォン等）を配置し、さらに医療オペレーターを置いて布陣の維持を図ります。\n[/step]\n[step: 終盤：決戦スキルの発動と防衛]\nボスの出現に合わせて重装で足止めし、アタッカーの決戦スキルを一斉に発動してボスを撃破します。\n[/step]\n[/steps]\n<br>\n\n### 4. 拡張アラートボックス (GitHubスタイル)\n特別な注意書きやアドバイスを、スタイル付きのボックスで強調します。(プレビューには反映されないため注意)\n\n> [!NOTE]\n> 通常の解説やバフに関するメモ書きです。\n\n> [!TIP]\n> 攻略効率を上げるためのテクニックや代替案です。\n\n> [!IMPORTANT]\n> 攻略を進める上で、絶対に避けては通れない必須要件です。\n\n> [!WARNING]\n> 配置順やSP管理など、失敗しやすい注意点を示します。\n\n> [!CAUTION]\n> 崩壊値や特殊デバフなど、戦線崩壊に直結する重大な危険性を示します。",
    "createdAt": "2026-06-26T04:00:00Z",
    "updatedAt": "2026-06-25T19:27:33.479Z",
    "history": []
  },
  {
    "id": "image-upload-test",
    "seriesId": "sarkaz",
    "title": "【画像テスト】CMSアップロード画像の表示確認",
    "category": "お知らせ",
    "tags": [
      "検証",
      "画像アップロード"
    ],
    "status": "published",
    "content": "## アップロード画像のプレビューテスト\n\n新しくアップロードした画像（テレジア）が正しく表示されるかテストします。\n\n![Theresa Image](images/uploads/1782300945149_theresa.png)\n\n画像の表示が正常であればテストは成功です。",
    "createdAt": "2026-06-24T20:40:00Z",
    "updatedAt": "2026-06-24T20:40:00Z",
    "history": []
  },
  {
    "id": "sami-hard-mode-guide",
    "seriesId": "sami",
    "title": "探索者と銀氷 of Sami 難易度15 攻略基礎理論",
    "category": "攻略記事",
    "tags": [
      "難易度15",
      "オペレーター推奨"
    ],
    "status": "published",
    "content": "## 探索者と銀氷の果て 難易度15 攻略\n\n本記事では、難易度15での基礎的な進め方と、バフの組み合わせについて解説します。\n\n詳細な戦闘の流れについては、以下の動画も参考にしてください。\n\n[難易度15 攻略解説動画](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n> [!NOTE]\n> 星6前衛オペレーターの招集タイミングが重要になります。\n\n詳細な仕様は[^1]を参照。\n\n[^1]: サルカズのバフ効果は乗算で計算されます。",
    "createdAt": "2026-06-20T18:00:00Z",
    "updatedAt": "2026-06-20T18:30:00Z",
    "history": [
      {
        "version": "1.1",
        "updatedAt": "2026-06-20T18:30:00Z",
        "summary": "新環境に伴う星6オペレーターの優先度調整"
      }
    ]
  },
  {
    "id": "sarkaz-starter-guide",
    "seriesId": "sarkaz",
    "title": "サルカズの炉辺奇談 初動の進め方と主要オペレーター推奨",
    "category": "攻略記事",
    "tags": [
      "サルカズの炉辺奇談",
      "初動ガイド"
    ],
    "status": "published",
    "content": "## サルカズの炉辺奇談 初動ガイド\n\n「サルカズの炉辺奇談」の初期ステージを安定して突破するための手順です。\n\n詳細なプレイ動画はこちら：\n[初動立ち回り解説動画](www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n※このリンクはプロトコル(https://)を含まない形式で自動補完のテスト用です。",
    "createdAt": "2026-06-22T10:00:00Z",
    "updatedAt": "2026-06-22T10:00:00Z",
    "history": []
  },
  {
    "id": "custom-components-test",
    "seriesId": "sami",
    "title": "【研究ドキュメント】カスタムMarkdown表記の使用例",
    "category": "検証記事",
    "tags": [
      "システム",
      "検証"
    ],
    "status": "published",
    "content": "## カスタムMarkdownコンポーネントの使用例\n\n本アーカイブでは、攻略情報をより見やすく記述するために独自のカスタムタグが利用可能です。\n\n### 1. カスタムバッジ\n攻略の難易度や属性を表すバッジです。\n\n[badge: 難易度15 | danger] [badge: 推奨昇進2 | warning] [badge: サーミ | info] [badge: 常設 | success] [badge: 通常バッジ]\n\n### 2. オペレーター推奨カード（グリッド）\n推奨オペレーターや戦術をグリッド状に綺麗に並べて表示します。\n\n[card-grid]\n[card: チューリップ | 物理回避を無視して大ダメージを与える強力な臨時契約。 | 優先度: 極めて高]\n[card: ティフォン | スキル2の永続化により、長射程から継続火力を出し続けることが可能。 | 優先度: 高]\n[card: イネス | 迷彩看破とバインド、コスト回収を同時にこなす万能な先鋒。 | 優先度: 高]\n[/card-grid]\n\n### 3. 攻略手順のステップリスト\n攻略の初期展開手順やフェーズ分けをグラフィカルに表示します。\n\n[steps]\n[step: 準備フェーズ]\nまずは先鋒オペレーター（イネス等）を配置し、コストを稼ぎつつ敵の進行を防ぎます。\n[/step]\n[step: 火力展開フェーズ]\n狙撃オペレーター（ティフォン等）を高台に配置し、中ボスの削りを開始します。\n[/step]\n[step: 決戦フェーズ]\n敵の第3波に合わせて重装や前衛の決戦スキルを発動し、敵を一掃します。\n[/step]\n[/steps]\n\n以上が、新規に実装されたカスタムコンポーネントの機能です。",
    "createdAt": "2026-06-23T12:00:00Z",
    "updatedAt": "2026-06-23T12:00:00Z",
    "history": []
  }
];

export const INITIAL_VIDEOS = [
  {
    "id": "v_1",
    "title": "探索者と銀氷の果て 難易度15 攻略解説動画",
    "youtubeUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "summary": "難易度15での星6オペレーターの招集優先度と、各層の強敵対策について解説します。",
    "publishedAt": "2026-06-20",
    "seriesId": "sami",
    "articleId": "sami-hard-mode-guide"
  },
  {
    "id": "v_2",
    "title": "サルカズの炉辺奇談 初動の立ち回り解説",
    "youtubeUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "summary": "新規追加された統合戦略テーマ「サルカズの炉辺奇談」の序盤の戦闘・招集チャートを詳しく解説。",
    "publishedAt": "2026-06-22",
    "seriesId": "sarkaz",
    "articleId": "sarkaz-starter-guide"
  }
];

export const INITIAL_TOURNAMENTS = [
  {
    "id": "t_1",
    "title": "第3回 TOGOSENローグ王決定戦 (探索者と銀氷の果て)",
    "seriesId": "sami",
    "status": "completed",
    "date": "2026-06-15",
    "archiveUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "participants": [
      "Dr. Texas",
      "Dr. Ch'en",
      "Dr. Kal'tsit"
    ],
    "rules": "### 大会レギュレーション\n- 対象：探索者と銀氷の果て（サーミローグ）\n- 難易度：15\n- 縛り条件：初期召集オペレーターは星3以下のみ",
    "results": "### 対戦結果\n\n| 順位 | プレイヤー | 最終到達階層 | スコア |\n| --- | --- | --- | --- |\n| 1 | Dr. Kal'tsit | 6層裏ボス撃破 | 1,480 |\n| 2 | Dr. Texas | 6層ボス撃破 | 1,220 |\n| 3 | Dr. Ch'en | 5層リタイア | 980 |",
    "scoreboard": "順位,プレイヤー,スコア,使用分隊,到達層\n1,Dr. Kal'tsit,1480,栄光分隊,6層裏ボス撃破\n2,Dr. Texas,1220,支援分隊,6層ボス撃破\n3,Dr. Ch'en,980,特訓分隊,5層リタイア"
  }
];
