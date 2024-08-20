import { GalleryItemProps } from "../../../types/GalleryItem";

const GalleryItem: React.FC<GalleryItemProps> = ({item}) => {return (
    <section className="gallery__imageContainer">
            <img className="gallery__image" src={item.src}>
    </img>
    <h3>{item.description}</h3>
    </section>

)}
export default GalleryItem;