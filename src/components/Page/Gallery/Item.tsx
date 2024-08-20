import { GalleryItemProps } from "../../../types/GalleryItem";

const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
  return (
    <section className="margin--med">
      <img alt={item.title} className="gallery__image" src={item.src}/>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </section>
  );
};
export default GalleryItem;
