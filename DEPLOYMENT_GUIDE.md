[DEPLOYMENT_GUIDE.md](https://github.com/user-attachments/files/31888933/DEPLOYMENT_GUIDE.md)
# GitHub Pages 部署指南

這個網站是純靜態網站，不需要安裝套件或建置工具。使用 GitHub Pages 即可免費取得公開網址：

`https://tofuhsu.github.io/`

## 1. 建立 repository

1. 使用個人 GitHub 帳號登入 https://github.com/。
2. 開啟 https://github.com/new。
3. Repository name 填入 `tofuhsu.github.io`。
4. Visibility 選擇 **Public**。
5. 不要勾選新增 README、`.gitignore` 或 license。
6. 按下 **Create repository**。

> 如果這個名稱已經存在，直接開啟原有的 `tofuhsu.github.io` repository，不要再建立第二個。

## 2. 上傳網站檔案

1. 解壓縮網站壓縮檔。# GitHub Pages 部署指南

這個網站是純靜態網站，不需要安裝套件或建置工具。使用 GitHub Pages 即可免費取得公開網址：

`https://tofuhsu.github.io/`

## 1. 建立 repository

1. 使用個人 GitHub 帳號登入 https://github.com/。
2. 開啟 https://github.com/new。
3. Repository name 填入 `tofuhsu.github.io`。
4. Visibility 選擇 **Public**。
5. 不要勾選新增 README、`.gitignore` 或 license。
6. 按下 **Create repository**。

> 如果這個名稱已經存在，直接開啟原有的 `tofuhsu.github.io` repository，不要再建立第二個。

## 2. 上傳網站檔案

1. 解壓縮網站壓縮檔。
2. 在空白 repository 頁面選擇 **uploading an existing file**；如果 repository 已有內容，選擇 **Add file → Upload files**。
3. 把解壓縮後資料夾內的所有項目拖進上傳區：
   - `.nojekyll`
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `DEPLOYMENT_GUIDE.md`
   - `assets` 資料夾
4. 確認 `index.html` 位於 repository 最外層，而不是位於 `tofuhsu.github.io/index.html` 這一層子資料夾中。
5. Commit message 可填 `Launch personal portfolio`。
6. 按下 **Commit changes**。

## 3. 開啟 GitHub Pages

1. 進入 repository 的 **Settings**。
2. 左側選擇 **Pages**。
3. 在 **Build and deployment** 中，Source 選擇 **Deploy from a branch**。
4. Branch 選擇 `main`，資料夾選擇 `/ (root)`。
5. 按下 **Save**。
6. 等待幾分鐘，再開啟 https://tofuhsu.github.io/。

## 4. 之後更新內容

在 GitHub repository 開啟要修改的檔案，按鉛筆圖示編輯並 commit。更新通常會在幾分鐘內自動發布。

若要更換履歷，請上傳新的 PDF 並維持以下檔名，網站上的按鈕就不需要修改：

`assets/Jeff_Hsuan-Fu_Hsu_Resume.pdf`

## 常見問題

- **網站顯示 404：** 確認 repository 名稱為 `tofuhsu.github.io`、Visibility 是 Public、Pages branch 是 `main` 與 `/ (root)`。
- **首頁沒有出現：** 確認 `index.html` 位於 repository 最外層。
- **版面沒有樣式：** 確認 `styles.css`、`script.js` 和 `assets` 資料夾都已上傳，且名稱大小寫完全相同。
- **履歷下載失敗：** 確認 PDF 位於 `assets/Jeff_Hsuan-Fu_Hsu_Resume.pdf`。
- **剛更新但畫面沒變：** 等待數分鐘後重新整理；必要時使用強制重新整理。

2. 在空白 repository 頁面選擇 **uploading an existing file**；如果 repository 已有內容，選擇 **Add file → Upload files**。
3. 把解壓縮後資料夾內的所有項目拖進上傳區：
   - `.nojekyll`
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `DEPLOYMENT_GUIDE.md`
   - `assets` 資料夾
4. 確認 `index.html` 位於 repository 最外層，而不是位於 `tofuhsu.github.io/index.html` 這一層子資料夾中。
5. Commit message 可填 `Launch personal portfolio`。
6. 按下 **Commit changes**。

## 3. 開啟 GitHub Pages

1. 進入 repository 的 **Settings**。
2. 左側選擇 **Pages**。
3. 在 **Build and deployment** 中，Source 選擇 **Deploy from a branch**。
4. Branch 選擇 `main`，資料夾選擇 `/ (root)`。
5. 按下 **Save**。
6. 等待幾分鐘，再開啟 https://tofuhsu.github.io/。

## 4. 之後更新內容

在 GitHub repository 開啟要修改的檔案，按鉛筆圖示編輯並 commit。更新通常會在幾分鐘內自動發布。

若要更換履歷，請上傳新的 PDF 並維持以下檔名，網站上的按鈕就不需要修改：

`assets/Jeff_Hsuan-Fu_Hsu_Resume.pdf`

## 常見問題

- **網站顯示 404：** 確認 repository 名稱為 `tofuhsu.github.io`、Visibility 是 Public、Pages branch 是 `main` 與 `/ (root)`。
- **首頁沒有出現：** 確認 `index.html` 位於 repository 最外層。
- **版面沒有樣式：** 確認 `styles.css`、`script.js` 和 `assets` 資料夾都已上傳，且名稱大小寫完全相同。
- **履歷下載失敗：** 確認 PDF 位於 `assets/Jeff_Hsuan-Fu_Hsu_Resume.pdf`。
- **剛更新但畫面沒變：** 等待數分鐘後重新整理；必要時使用強制重新整理。
