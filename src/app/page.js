import Daypass from "@/components/Daypass";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import SimpleMenu from "@/components/SimpleMenu";

export default function Home() {
  return (
    <div className=" bg-[#EFE2BD] w-full flex flex-col justify-start items-center">
      <Navbar />
      <Daypass />
      <Gallery />
      <SimpleMenu />
      <Footer />
    </div>
  );
}
