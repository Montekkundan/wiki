import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
    <Navbar />
  <div className="flex flex-1 items-center justify-center px-6 pb-10">
    <div className="flex text-center items-center justify-center w-full">
      <Heading />
    </div>
  </div>
  <Footer />
</div>

  );
}
