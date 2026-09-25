# HaHa Wedding Studio — bản WOW

Landing Astro với **Lenis smooth scroll**, **GSAP ScrollTrigger** (hero zoom, chapter pin, gallery ngang), rồi phần dịch vụ / giá / liên hệ.

## Chạy thử

```bash
cd site
npm install
npm run dev
```

Mở URL in terminal (thường `http://localhost:4321`).

**Ảnh:** Đặt file `.jpg` trong `public/images/` (Astro phục vụ tại `/images/...`).

## Build production

```bash
npm run build
npm run preview
```

## Cấu trúc

- `src/components/LookbookIntro.astro` — phần mở wow (GSAP)
- `src/pages/index.astro` — trang chính (lookbook + landing)

## Contact form → email (Web3Forms)

1. Vào [web3forms.com](https://web3forms.com), nhập **email studio** (Gmail cũng được) → lấy **Access Key**.
2. Trong thư mục `site/`, copy `.env.example` thành `.env`:
   ```bash
   copy .env.example .env
   ```
3. Dán key: `PUBLIC_WEB3FORMS_ACCESS_KEY=...`
4. Chạy lại `npm run dev` (hoặc build lại khi deploy).

Khi có key: **Send message** gửi thẳng tới email đã đăng ký.  
Chưa có key: form vẫn **copy + mở Facebook** (phương án cũ).

Khi deploy (Vercel/Netlify), thêm biến môi trường `PUBLIC_WEB3FORMS_ACCESS_KEY` trong dashboard.

## Tùy chỉnh

- Đổi ảnh: thêm/sửa file trong `public/images/`, rồi cập nhật tên file trong `LookbookIntro.astro`.
- Giảm hiệu ứng: trình duyệt bật *Reduce motion* → Lenis tắt, GSAP intro vẫn chạy nhẹ.
