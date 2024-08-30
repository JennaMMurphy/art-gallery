import { useState, useEffect } from "react";
import GalleryItem from "./Item";
import type { GalleryItemType } from "../../../types/GalleryItem";
import _fetch from "../../../utils/Fetch";

const GalleryIndex: React.FC = () => {
  const [items, setItems] = useState<GalleryItemType[]>([]);
  useEffect(() => {
    _fetch<GalleryItemType[]>("api/v1/gallery/items").then(({ data }) => {
      if (data) setItems(data);
    });
  }, []);

  return (
    <div className="gallery__container">
      {items.map((item, index) => (
        <GalleryItem item={item} key={`gallery-item-${index}`} />
      ))}
    </div>
  );
};

export default GalleryIndex;
