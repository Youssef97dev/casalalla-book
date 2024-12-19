import Image from "next/image";

const imagesUrl = [
  "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,h_4503,w_4503/casalalla-v2/cm7aur2bolaw6ejyzsuq",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,h_4503,w_4503/casa%20Lalla/ebol3p21f6cjzaei9duu",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_crop,h_4503,w_4503/casa%20Lalla/ire8b4lttkaofa5scit3",
];

const Gallery = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row justify-between items-start space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 py-2 px-5">
      {imagesUrl.map((image, index) => (
        <div key={index} className="w-full h-full">
          <Image
            src={image}
            alt="casa lalla gallery"
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
