# 靜默專注殿

不能說話的線上專注空間。大家的人物一起走進殿裡，點一炷香專注，做完一件事撥一顆念珠，收工時三拜下班。有佛殿、山中小屋、深夜圖書館、禪意茶室四個場景，以及限時彩蛋「紙箱公園」。

## 檔案

| 檔案 | 用途 |
|---|---|
| `src/app.html` | 頁面原始檔。claude.ai Artifact 版直接發布這份 |
| `index.html` | GitHub Pages 用的完整網頁，由 `node build.js` 從 `src/app.html` 產生，不要手改 |
| `config.js` | 自架設定：Supabase 連線與主持人密語 |
| `tools/hash.js` | 產生主持人密語的雜湊值 |

改了 `src/app.html` 之後，記得執行：

```bash
node build.js
```

## 讓大家看得到彼此（Supabase Realtime）

沒設定的話網站一樣能用，只是每個人都是單人模式。

1. 到 [supabase.com](https://supabase.com) 用 GitHub 帳號登入，建立一個新專案（免費方案即可，區域選 Northeast Asia (Tokyo) 或 Singapore）。
2. 專案建好後，到 **Project Settings → API**，複製：
   - **Project URL** → 貼到 `config.js` 的 `supabaseUrl`
   - **anon public** 金鑰 → 貼到 `supabaseAnonKey`
   - 不要用 `service_role` 金鑰。
3. 不需要建立任何資料表，這個網站只用即時連線，不會把資料存進資料庫。

## 主持人密語

主持人可以為整殿開臨時共修。

```bash
node tools/hash.js 你想要的密語
```

把印出來的那串字貼到 `config.js` 的 `hostHash`。之後在網頁最下方輸入密語，就會出現主持人按鈕。

這只是把按鈕藏起來，懂技術的人還是能自己送出共修通知，所以密語不要和其他帳號共用。

## 隱私

同步給其他人的只有：在哪一殿、坐著或站著、位置、香還剩多少、衣服和膚色。不會傳送名字，也不會傳送你寫的內容、念珠數或收工筆記，這些只存在自己的瀏覽器。
