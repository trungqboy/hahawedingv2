# Đưa web HaHa lên GitHub + GitHub Pages

Làm lần lượt. Mỗi bước xong mới sang bước sau.

---

Repo của bạn: **https://github.com/trungqboy/hahawedingv2**

`site/astro.config.mjs` đã set `trungqboy` + `hahawedingv2`. Web sau deploy:

**https://trungqboy.github.io/hahawedingv2/**

---

## Phần A — Repo GitHub

Nếu repo **đã tạo** (link trên) → bỏ qua bước tạo mới, sang Phần C.

---

## Phần C — Đẩy code từ máy Windows

Mở **PowerShell**:

```powershell
cd C:\Users\PC20240043\Desktop\hahaweading-main\hahaweading-main

git init
git add .
git status
```

Kiểm tra: **không** thấy `site/.env` hoặc `site/node_modules` (đã có `.gitignore`).

```powershell
git commit -m "HaHa Wedding site"
git branch -M main
git remote add origin https://github.com/trungqboy/hahawedingv2.git
git push -u origin main
```

Lần đầu có thể hỏi **đăng nhập GitHub** (trình duyệt hoặc token).

**Cách dễ hơn:** cài [GitHub Desktop](https://desktop.github.com/) → Add local repository → folder trên → Publish repository.

---

## Phần D — Bật GitHub Pages

1. Repo trên GitHub → **Settings** → **Pages**.
2. **Build and deployment** → Source: **GitHub Actions** (không chọn Deploy from branch).
3. Tab **Actions** → workflow **Deploy to GitHub Pages** → đợi chấm xanh (~2–3 phút).

Web sẽ ở:

`https://trungqboy.github.io/hahawedingv2/`

---

## Phần E — Form gửi email (Web3Forms)

File `site/.env` **không** lên GitHub. Trên repo:

1. **Settings** → **Secrets and variables** → **Actions**.
2. **New repository secret**
3. Name: `PUBLIC_WEB3FORMS_ACCESS_KEY`
4. Value: key Web3Forms của bạn.
5. **Actions** → **Re-run all jobs** (hoặc push commit nhỏ) để build lại.

---

## Phần F — Sửa web sau này

```powershell
cd C:\Users\PC20240043\Desktop\hahaweading-main\hahaweading-main
# sửa code...
git add .
git commit -m "Mô tả thay đổi"
git push
```

Actions tự build → Pages cập nhật sau vài phút.

---

## Lỗi thường gặp

| Triệu chứng | Cách xử lý |
|-------------|------------|
| Trang trắng / không có CSS | Sai `GITHUB_USER` / `GITHUB_REPO` trong `astro.config.mjs` |
| 404 | Chưa bật Pages = **GitHub Actions** |
| Form không gửi mail | Thiếu secret `PUBLIC_WEB3FORMS_ACCESS_KEY` |
| `git push` bị từ chối | Chưa login GitHub; dùng GitHub Desktop |

---

## Muốn tên miền riêng (sau)

Mua domain → Vercel/Cloudflare hoặc custom domain trong GitHub Pages Settings. Có thể đổi `site`/`base` trong Astro khi dùng domain gốc — làm sau khi đã quen Pages.
