# HaHa Wedding Studio — bản WOW

Landing Astro phong cách **editorial tối giản** (tham khảo layout portfolio kiểu Erich McVey): trang chủ xếp ảnh full-width, **Giới thiệu**, **Liên hệ**. Component lookbook GSAP cũ: `LookbookIntro.astro` (không dùng trên trang chủ).

## Chạy thử

```bash
cd site
npm install
npm run dev
```

Mở URL in terminal (thường `http://localhost:4321`).

**Ảnh:** Đặt file trong `public/images/` — trang chủ tự liệt kê. Ít hơn 18 ảnh: tự **lặp** đến ~48 khung (placeholder). Đủ 18+ ảnh: chỉ hiện ảnh thật. Chỉnh `FEED_TARGET_COUNT` / `preferredImageOrder` trong `src/data/gallery.ts`.

## Build production

```bash
npm run build
npm run preview
```

## Cấu trúc

- `src/pages/index.astro` — Home (lưới ảnh portfolio)
- `src/pages/work.astro` — Work (giới thiệu phong cách / dịch vụ)
- `src/pages/about.astro` — giới thiệu studio
- `src/pages/inquire.astro` — form liên hệ
- `src/components/LookbookIntro.astro` — lookbook GSAP (tùy chọn, không gắn trang chủ)

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
