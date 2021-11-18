import "./menu-item.styles.scss";
import { ImageSize } from "../../types/ImageSize";

interface menuItemProps {
  title: string;
  imageUrl: string;
  size?: ImageSize;
}

const MenuItem = ({ title, imageUrl, size }: menuItemProps) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl}`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
