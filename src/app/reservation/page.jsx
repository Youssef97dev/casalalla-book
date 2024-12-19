import Logo from "./components/Logo";
import ReservationForm from "./components/ReservationForm";

const page = () => {
  return (
    <div className="relative bg-[url('https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/e28ypfnpoadluzx8wtsy')] bg-cover bg-center bg-no-repeat w-full h-[120vh] px-4 lg:px-20 xl:px-80 py-14 lg:py-10 flex flex-col justify-start items-center gap-5">
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-[#00000033]"></div>
      <Logo />
      <ReservationForm />
    </div>
  );
};

export default page;
