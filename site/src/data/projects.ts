import { img } from './gallery';

export type ProjectImageLayout =
  | 'full'
  | 'wide'
  | 'landscape'
  | 'inset'
  | 'narrow'
  | 'portrait'
  | 'half'
  | 'spacer';

export type ProjectImage = {
  /** Bỏ trống khi `layout: 'spacer'`. */
  path?: string;
  alt?: string;
  layout?: ProjectImageLayout;
};

export type WeddingProject = {
  slug: string;
  title: string;
  /** Hiển thị ở album detail (Planning). */
  planning: string;
  location: string;
  category: string;
  year: string;
  /** Cover: path từ public hoặc filename trong `public/images/`. */
  coverImage: string;
  images: ProjectImage[];
};

/** Đường ảnh: hỗ trợ `images/work/.../cover.jpg` hoặc `ten-file.jpg` (thư mục images gốc). */
export function resolveProjectImage(pathOrFile: string) {
  const normalized = pathOrFile.replace(/^\//, '');
  if (normalized.includes('/')) {
    return `${import.meta.env.BASE_URL}${normalized}`;
  }
  return img(pathOrFile);
}

/** Thêm album: copy block, đổi slug/title/coverImage/images. */
export const projects: WeddingProject[] = [
  {
    slug: 'minh-linh',
    title: 'MINH & LINH',
    planning: 'Pre-Wedding',
    location: 'Quảng Bình',
    category: 'Pre-Wedding',
    year: '2026',
    coverImage: '486148641_678354381220198_4662320279076891235_n.jpg',
    images: [
      { path: '486148641_678354381220198_4662320279076891235_n.jpg', layout: 'full' },
      { path: '497510492_719181543804148_7336016173145369377_n.jpg', layout: 'inset' },
      { path: '484974207_676578228064480_2827346855033866682_n.jpg', layout: 'half' },
      { path: '495244196_711049291284040_1562207849006092263_n.jpg', layout: 'half' },
      { path: '492252228_703873295334973_8274147873496200990_n.jpg', layout: 'portrait' },
      { path: '492796629_703873292001640_1414195682529420683_n.jpg', layout: 'full' },
    ],
  },
  {
    slug: 'anh-mai',
    title: 'ANH & MAI',
    planning: 'Studio Session',
    location: 'Quảng Bình',
    category: 'Studio',
    year: '2026',
    coverImage: '495244196_711049291284040_1562207849006092263_n.jpg',
    images: [
      { path: '495244196_711049291284040_1562207849006092263_n.jpg', layout: 'wide' },
      { layout: 'spacer' },
      { path: '492252228_703873295334973_8274147873496200990_n.jpg', layout: 'inset' },
      { layout: 'spacer' },
      { path: '492796629_703873292001640_1414195682529420683_n.jpg', layout: 'half' },
      { path: '486148641_678354381220198_4662320279076891235_n.jpg', layout: 'half' },
      { layout: 'spacer' },
      { path: '497510492_719181543804148_7336016173145369377_n.jpg', layout: 'portrait' },
      { layout: 'spacer' },
      { path: '484974207_676578228064480_2827346855033866682_n.jpg', layout: 'landscape' },
      { layout: 'spacer' },
      { path: '495244196_711049291284040_1562207849006092263_n.jpg', layout: 'full' },
      { path: '492252228_703873295334973_8274147873496200990_n.jpg', layout: 'inset' },
      { layout: 'spacer' },
      { path: '492796629_703873292001640_1414195682529420683_n.jpg', layout: 'wide' },
      { path: '486148641_678354381220198_4662320279076891235_n.jpg', layout: 'portrait' },
      { layout: 'spacer' },
      { path: '497510492_719181543804148_7336016173145369377_n.jpg', layout: 'full' },
    ],
  },
  {
    slug: 'nam-trang',
    title: 'NAM & TRANG',
    planning: 'Pre-Wedding',
    location: 'Quảng Bình',
    category: 'Pre-Wedding',
    year: '2025',
    coverImage: '492796629_703873292001640_1414195682529420683_n.jpg',
    images: [
      { path: '492796629_703873292001640_1414195682529420683_n.jpg', layout: 'full' },
      { path: '486148641_678354381220198_4662320279076891235_n.jpg', layout: 'narrow' },
      { path: '497510492_719181543804148_7336016173145369377_n.jpg', layout: 'full' },
    ],
  },
  {
    slug: 'huy-ngoc',
    title: 'HUY & NGỌC',
    planning: 'Concept Editorial',
    location: 'Quảng Bình',
    category: 'Concept',
    year: '2025',
    coverImage: '484974207_676578228064480_2827346855033866682_n.jpg',
    images: [
      { path: '484974207_676578228064480_2827346855033866682_n.jpg', layout: 'full' },
      { path: '492252228_703873295334973_8274147873496200990_n.jpg', layout: 'full' },
      { path: '495244196_711049291284040_1562207849006092263_n.jpg', layout: 'inset' },
    ],
  },
  {
    slug: 'tuan-ha',
    title: 'TUẤN & HÀ',
    planning: 'Pre-Wedding',
    location: 'Quảng Bình',
    category: 'Pre-Wedding',
    year: '2025',
    coverImage: '497510492_719181543804148_7336016173145369377_n.jpg',
    images: [
      { path: '497510492_719181543804148_7336016173145369377_n.jpg', layout: 'full' },
      { path: '486148641_678354381220198_4662320279076891235_n.jpg', layout: 'inset' },
      { path: '492252228_703873295334973_8274147873496200990_n.jpg', layout: 'full' },
    ],
  },
  {
    slug: 'long-lan',
    title: 'LONG & LAN',
    planning: 'Studio Session',
    location: 'Quảng Bình',
    category: 'Studio',
    year: '2024',
    coverImage: '492796629_703873292001640_1414195682529420683_n.jpg',
    images: [
      { path: '492796629_703873292001640_1414195682529420683_n.jpg', layout: 'full' },
      { path: '484974207_676578228064480_2827346855033866682_n.jpg', layout: 'narrow' },
      { path: '495244196_711049291284040_1562207849006092263_n.jpg', layout: 'full' },
    ],
  },
];

export function projectCoverSrc(project: WeddingProject) {
  return resolveProjectImage(project.coverImage);
}

export function projectImageSrc(path: string) {
  return resolveProjectImage(path);
}

export function isStorySpacer(image: ProjectImage) {
  return image.layout === 'spacer' || !image.path;
}

export function projectMetaLine(project: WeddingProject) {
  return `${project.category} / ${project.location} / ${project.year}`;
}

export function getProjectBySlug(slug: string): WeddingProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectNeighbors(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

export function imageAlt(project: WeddingProject, image: ProjectImage, index: number) {
  return image.alt ?? `${project.title} — ảnh ${index + 1}`;
}

/** Gợi ý story dài khi album chỉ có vài ảnh — lặp file, xen kẽ layout. */
export function expandStoryImages(images: ProjectImage[]): ProjectImage[] {
  const photos = images.filter((item) => !isStorySpacer(item) && item.path);
  if (photos.length === 0) return images;
  if (images.some((item) => item.layout === 'spacer')) return images;

  const pattern: ProjectImageLayout[] = ['wide', 'inset', 'half', 'half', 'portrait', 'landscape', 'full'];
  const out: ProjectImage[] = [];
  let p = 0;

  for (let i = 0; i < pattern.length; i++) {
    const layout = pattern[i];
    if (layout === 'half') {
      out.push({ path: photos[p % photos.length].path, layout: 'half' });
      out.push({ path: photos[(p + 1) % photos.length].path, layout: 'half' });
      p += 2;
      continue;
    }
    out.push({ path: photos[p % photos.length].path, layout });
    p += 1;
  }

  return out;
}
