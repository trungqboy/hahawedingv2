export const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

export type GalleryItem = {
  src: string;
  alt: string;
  file: string;
};

/** Thứ tự ưu tiên (ảnh đẹp lên trước). File không có trong list vẫn hiện ở cuối. */
export const preferredImageOrder = [
  '486148641_678354381220198_4662320279076891235_n.jpg',
  '497510492_719181543804148_7336016173145369377_n.jpg',
  '484974207_676578228064480_2827346855033866682_n.jpg',
  '495244196_711049291284040_1562207849006092263_n.jpg',
  '492252228_703873295334973_8274147873496200990_n.jpg',
  '492796629_703873292001640_1414195682529420683_n.jpg',
];

const altByFile: Record<string, string> = {
  '486148641_678354381220198_4662320279076891235_n.jpg': 'Cặp đôi chụp ảnh cưới — HaHa Wedding',
  '497510492_719181543804148_7336016173145369377_n.jpg': 'Ảnh cưới studio HaHa Wedding',
  '492252228_703873295334973_8274147873496200990_n.jpg': 'Trang điểm cô dâu',
  '492796629_703873292001640_1414195682529420683_n.jpg': 'Không gian studio cưới',
  '484974207_676578228064480_2827346855033866682_n.jpg': 'Ảnh cưới concept lãng mạn',
  '495244196_711049291284040_1562207849006092263_n.jpg': 'Ảnh cưới HaHa Wedding',
};

export function buildGalleryItems(filenames: string[]): GalleryItem[] {
  const imageExt = /\.(jpe?g|png|webp|gif)$/i;
  const unique = [...new Set(filenames.filter((f) => imageExt.test(f)))];

  const rank = new Map(preferredImageOrder.map((name, i) => [name, i]));
  unique.sort((a, b) => {
    const ra = rank.has(a) ? rank.get(a)! : 9999;
    const rb = rank.has(b) ? rank.get(b)! : 9999;
    if (ra !== rb) return ra - rb;
    return a.localeCompare(b);
  });

  return unique.map((file) => ({
    file,
    src: img(file),
    alt: altByFile[file] ?? 'Ảnh cưới & concept — HaHa Wedding Studio',
  }));
}

/**
 * Tạm lặp ảnh cho feed dài như erichmcvey.com.
 * Khi đã có đủ ảnh thật (≥ minUniqueNoRepeat), chỉ hiện ảnh unique.
 */
export const FEED_TARGET_COUNT = 48;
export const minUniqueNoRepeat = 18;

export function expandGalleryFeed(items: GalleryItem[]): GalleryItem[] {
  if (items.length === 0) return [];

  if (items.length >= minUniqueNoRepeat) {
    return items;
  }

  const target = Math.max(Math.ceil(FEED_TARGET_COUNT / 4) * 4, items.length);
  const out: GalleryItem[] = [];
  let rotate = 0;

  while (out.length < target) {
    const round = [...items.slice(rotate), ...items.slice(0, rotate)];
    for (const item of round) {
      if (out.length >= target) break;
      out.push(item);
    }
    rotate = (rotate + 1) % items.length;
  }

  return out;
}

/** Fallback khi chưa có thư mục ảnh (dev). */
export const galleryImagesFallback = expandGalleryFeed(buildGalleryItems(preferredImageOrder));

export const studio = {
  address: 'Thanh Kê, Bố Trạch, Quảng Bình',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Thanh+K%C3%AA,+B%E1%BB%91+Tr%E1%BA%A1ch,+Qu%E1%BA%A3ng+B%C3%ACnh',
};

export const social = {
  facebook: 'https://www.facebook.com/thu.ha.nguyen.479756',
  instagram: 'https://www.instagram.com/',
  tiktok: 'https://www.tiktok.com/',
  email: 'hello@hahawedding.studio',
};
