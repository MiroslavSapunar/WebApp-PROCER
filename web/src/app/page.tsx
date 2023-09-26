import Blogs from "./components/Home/Blogs";
import Locations from "./components/Home/Locations";
import Newsletter from "./components/Home/Newsletter";

export default function HomePage() {
  return (
    <main className=" bg-slate-200  min-h-screen ">
      <Blogs />
      <Newsletter />
      <Locations />
    </main>
  )
}
