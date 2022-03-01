//Images (temp solution)
import Image0 from "../images/gallery/nashi_raboty_0.png";
import Image1 from "../images/gallery/nashi_raboty_1.png";
import Image2 from "../images/gallery/nashi_raboty_2.png";
import Image3 from "../images/gallery/nashi_raboty_3.png";
import Image4 from "../images/gallery/nashi_raboty_4.png";
import Image5 from "../images/gallery/nashi_raboty_5.png";
import Image6 from "../images/gallery/nashi_raboty_6.png";
import Image7 from "../images/gallery/nashi_raboty_7.png";
import Image8 from "../images/gallery/nashi_raboty_8.png";
import Image9 from "../images/gallery/nashi_raboty_9.png";
import Image10 from "../images/gallery/nashi_raboty_10.png";
import Image11 from "../images/gallery/nashi_raboty_11.png";
import Image12 from "../images/gallery/nashi_raboty_12.png";
import Image13 from "../images/gallery/nashi_raboty_13.png";
import Image14 from "../images/gallery/nashi_raboty_14.png";
import Image15 from "../images/gallery/nashi_raboty_15.png";
import Image16 from "../images/gallery/nashi_raboty_16.png";
import Image17 from "../images/gallery/nashi_raboty_17.png";

const GalleryImages = () => {
  const images = [Image0, Image1, Image2, Image3, Image4, Image5,
    Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14,
    Image15, Image16, Image17];

  return (
    <div className="showcase-grid">
        {images.map((item, index) => (
            <div className="showcase-item" key={index}><img src={item} alt={"photo nomer " + index}/></div>
        ))}
    </div>
  )
}

export default GalleryImages