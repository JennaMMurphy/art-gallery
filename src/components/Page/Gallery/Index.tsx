import GalleryItem from "./Item";
import type { GalleryItemType } from "../../../types/GalleryItem";

const GalleryIndex: React.FC = () => {
  const items: GalleryItemType[] = [
    {
      description: "Placeholder Image",
      src: "https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      description: "Placeholder Image",
      src: "https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      description: "Placeholder Image",
      src: "https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="gallery__container">
      {items.map((item, index) => (
        <GalleryItem item={item} />
      ))}
    </div>
  );
};

export default GalleryIndex;
