export interface GalleryItemProps {
  item: GalleryItemType;
}

export interface GalleryItemType {
  src: string;
  price: number;
  description: string;
  title: string;
}
