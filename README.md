# RareSoul 64 MVP

RareSoul 64 是一個以 Next.js 製作的人格圖鑑測驗 MVP，包含首頁、測驗頁、結果頁、完整報告頁，以及伴侶、親子、職場媒合入口。

## 本機啟動

```bash
npm install
npm run dev
```

開啟：

```text
http://localhost:3000
```

## 可用指令

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## 建議部署方式

這個專案是 Next.js App Router 專案，包含動態路由與互動頁面。建議部署到 Vercel，並用 GitHub repository 連動自動部署。

流程：

1. 將此資料夾推到 GitHub。
2. 到 Vercel 建立 New Project。
3. 選擇這個 GitHub repository。
4. Framework Preset 選 Next.js。
5. Build Command 使用 `npm run build`。
6. Deploy 後即可取得對外網址。

## GitHub 推送指令

如果還沒有 GitHub repository，可以先建立一個空 repo，例如 `raresoul-64-mvp`，然後在本機執行：

```bash
git remote add origin https://github.com/YOUR_ACCOUNT/raresoul-64-mvp.git
git branch -M main
git push -u origin main
```

如果使用 GitHub CLI：

```bash
gh repo create raresoul-64-mvp --private --source=. --remote=origin --push
```

## 備註

目前付款與資料庫仍是 MVP 模擬版；Supabase schema 與 seed 結構放在 `supabase/` 與 `docs/` 內，後續可接正式 auth、儲存結果與付款解鎖。
