import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Navbar } from "./_components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
    <Navbar />
  <div className="flex flex-col flex-1 items-center justify-center px-6 pb-10">
    <div className="flex mb-8 text-center items-center justify-center w-full">
      <Heading />
    </div>
    <div >
    <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
    </div>
  </div>
  <Footer />
</div>

  );
}
