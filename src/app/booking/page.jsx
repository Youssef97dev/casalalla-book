import Book from "./components/Book";
import Link from "next/link";
import {
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareEnvelope,
} from "react-icons/fa6";

const page = () => {
  return (
    <div className="bg-[#F5EDE2] w-full flex flex-col justify-start items-center h-[120vh] px-0 lg:px-20 xl:px-96 py-0 lg:py-10">
      <Book />
      <div className="w-full flex gap-2 justify-center text-[#333333] items-center mt-5">
        <Link
          target="_blank"
          href="mailto:reservations@casalallatakerkoust.com"
        >
          <FaSquareEnvelope size={30} className="cursor-pointer" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/casa.lalla.takerkoust"
        >
          <FaSquareInstagram size={30} className="cursor-pointer" />
        </Link>
        <Link target="_blank" href="http://wa.me/212675480018">
          <FaSquareWhatsapp size={30} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default page;
