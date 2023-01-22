import PhotoAlbum from "react-photo-album"
import NextJsImage from "./NextJsImage"

// ./8.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 4.5966MiB 0.000u 0:00.001
// ./9.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 4.01937MiB 0.000u 0:00.001
// ./14.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 1.57454MiB 0.000u 0:00.001
// ./28.jpg JPEG 6000x4000 6000x4000+0+0 8-bit sRGB 4.00436MiB 0.000u 0:00.001
// ./29.jpg JPEG 2305x1537 2305x1537+0+0 8-bit sRGB 341119B 0.000u 0:00.001
// ./15.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 1285660B 0.000u 0:00.000
// ./17.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 1.96241MiB 0.000u 0:00.001
// ./16.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 2.53875MiB 0.000u 0:00.000
// ./12.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 2.89989MiB 0.000u 0:00.001
// ./13.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 2.3663MiB 0.000u 0:00.001
// ./11.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 2.37773MiB 0.000u 0:00.001
// ./10.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 4623180B 0.000u 0:00.001
// ./21.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 3.14584MiB 0.000u 0:00.001
// ./20.jpg JPEG 1536x2049 1536x2049+0+0 8-bit sRGB 840362B 0.000u 0:00.001
// ./22.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 2.29213MiB 0.000u 0:00.001
// ./23.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 1.654MiB 0.000u 0:00.001
// ./27.jpg JPEG 4000x6000 4000x6000+0+0 8-bit sRGB 2.19806MiB 0.000u 0:00.001
// ./26.jpg JPEG 6000x4000 6000x4000+0+0 8-bit sRGB 1.96002MiB 0.000u 0:00.001
// ./32.jpg JPEG 2305x1537 2305x1537+0+0 8-bit sRGB 342623B 0.000u 0:00.001
// ./18.jpg JPEG 2678x4015 2678x4015+0+0 8-bit sRGB 981122B 0.000u 0:00.001
// ./24.jpg JPEG 4000x6000 4000x6000+0+0 8-bit sRGB 3.86427MiB 0.000u 0:00.001
// ./30.jpg JPEG 4000x6000 4000x6000+0+0 8-bit sRGB 1.77784MiB 0.000u 0:00.001
// ./31.jpg JPEG 4000x6000 4000x6000+0+0 8-bit sRGB 2.55442MiB 0.000u 0:00.001
// ./25.jpg JPEG 4000x6000 4000x6000+0+0 8-bit sRGB 1.53558MiB 0.000u 0:00.001
// ./19.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 3.04184MiB 0.000u 0:00.001
// ./4.jpg JPEG 1536x2049 1536x2049+0+0 8-bit sRGB 1.60329MiB 0.000u 0:00.001
// ./5.jpg JPEG 1536x2049 1536x2049+0+0 8-bit sRGB 790256B 0.000u 0:00.001
// ./7.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 4.22667MiB 0.000u 0:00.001
// ./6.jpg JPEG 3024x4032 3024x4032+0+0 8-bit sRGB 2.11449MiB 0.000u 0:00.001
// ./2.jpg JPEG 1440x1800 1440x1800+0+0 8-bit sRGB 164754B 0.000u 0:00.000
// ./3.jpg JPEG 1440x1800 1440x1800+0+0 8-bit sRGB 459115B 0.000u 0:00.000
// ./1.jpg JPEG 1440x1800 1440x1800+0+0 8-bit sRGB 134873B 0.000u 0:00.000

// sort above by number
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