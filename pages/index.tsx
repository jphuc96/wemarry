import PhotoAlbum, { RenderPhotoProps } from "react-photo-album"
import Image from "next/image"

const NextJsImage: React.FC<RenderPhotoProps> = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) => (
  <div style={wrapperStyle}>
    <div style={{ display: "block", position: "relative", width: "100%", height: "100%" }}>
      <Image fill src={src} alt={alt} title={title} sizes={sizes} className={className} onClick={onClick} />
    </div>
  </div>
)

const photos = [
  { src: "/images/phuquoc/1.jpg", width: 1440, height: 1800 },
  { src: "/images/phuquoc/2.jpg", width: 1440, height: 1800 },
  { src: "/images/phuquoc/3.jpg", width: 1440, height: 1800 },
  { src: "/images/phuquoc/4.jpg", width: 1536, height: 2049 },
  { src: "/images/phuquoc/5.jpg", width: 1536, height: 2049 },
  { src: "/images/phuquoc/6.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/7.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/8.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/9.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/10.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/11.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/12.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/13.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/14.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/15.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/16.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/17.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/18.jpg", width: 2678, height: 4015 },
  { src: "/images/phuquoc/19.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/20.jpg", width: 1536, height: 2049 },
  { src: "/images/phuquoc/21.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/22.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/23.jpg", width: 3024, height: 4032 },
  { src: "/images/phuquoc/24.jpg", width: 4000, height: 6000 },
  { src: "/images/phuquoc/25.jpg", width: 4000, height: 6000 },
  { src: "/images/phuquoc/26.jpg", width: 6000, height: 4000 },
  { src: "/images/phuquoc/27.jpg", width: 4000, height: 6000 },
  { src: "/images/phuquoc/28.jpg", width: 4000, height: 6000 },
  { src: "/images/phuquoc/29.jpg", width: 4000, height: 6000 },
  { src: "/images/phuquoc/30.jpg", width: 4000, height: 6000 },
  { src: "/images/phuquoc/31.jpg", width: 4000, height: 6000 },
  { src: "/images/phuquoc/32.jpg", width: 2305, height: 1537 },
]

const Gallery = () => <PhotoAlbum layout="columns" photos={photos} renderPhoto={NextJsImage} />

export default Gallery