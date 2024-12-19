import Image from "next/image";

const SimpleMenu = () => {
  return (
    <div className="bg-primary_12 h-full lg:h-[120vh] w-full flex flex-col lg:flex-row justify-center items-center px-5 lg:px-20 py-8 lg:py-16 gap-2 lg:gap-5">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/ycfub6xp8gjuz3gla8xh"
          height={1000}
          width={500}
          className="object-cover"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center py-5 lg:py-28">
        <div className="w-full h-full flex flex-col justify-start items-center border-t border-b border-primary_10 text-center text-[#EFE2BD] gap-4 px-3 lg:px-28 py-3">
          <h1 className="my-2 lg:my-10 text-[21.51px] lg:text-[30px] leading-[28.91px] lg:leading-[40.32px]">{`SAMPLE LUNCH MENU`}</h1>
          <span className="text-[13.5px] leading-[20.25px]">{`Beetroot salad, blackberry, lime & goat cheese mousse`}</span>
          <span className="text-[13.5px] leading-[20.25px]">{`Kale Caesar salad`}</span>
          <span className="text-[13.5px] leading-[20.25px]">{`Zaatar roasted carrots feta cream and honey`}</span>
          <span className="text-[13.5px] leading-[20.25px]">{`Farmhouse fish fingers`}</span>
          <span className="text-[13.5px] leading-[20.25px]">{`~`}</span>
          <span className="text-[13.5px] leading-[20.25px]">{`Casablanca Beer Roast Chicken with mixed garden leaves and sauteed potatoes with sundried tomato butter`}</span>
          <span className="text-[13.5px] leading-[20.25px]">{`~`}</span>
          <span className="text-[13.5px] leading-[20.25px]">{`Chocolate Brownie Sundae`}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleMenu;
