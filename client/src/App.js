import bismillah from "./assets/bismillah.png";
import bismillah2 from "./assets/bismillah2.png";
import corner from "./assets/corner.png";
import corner3 from "./assets/corner3.png";
import Nikkah from "./components/nikkah";
import Holud from "./components/holud";
import Gifts from "./components/gifts";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#d1cfc5] to-[#e2e0cc] overflow-hidden">
        <h1 className="absolute left-1/2 translate-x-[-50%] font-bold text-2xl text-custom-golden">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِي
        </h1>
        <img
          src={corner3}
          alt="Corner"
          className="absolute top-0 left-0 size-24 lg:size-48 scale-x-[-1] -rotate-90"
        />
        <img
          src={corner3}
          alt="Corner"
          className="absolute top-0 right-0 size-24 lg:size-48 rotate-90"
        />
        {/* </div> */}
        {/* <img
          src={bismillah2}
          alt="Bismillah"
          className="w-2/6 lg:w-1/6 mx-auto pt-2"
        /> */}

        <Navbar />
        {/* <div className="flex flex-col items-center justify-center -space-y-10 mt-8">
          <h1 className="font-passionsConflict text-8xl text-yellow-600 z-0">
            Mufti
          </h1>
          <h1 className="font-passionsConflict text-6xl  z-10">weds</h1>
          <h1 className="font-passionsConflict text-8xl text-yellow-600 z-0">
            Momo
          </h1>
        </div> */}
        <Nikkah />
        <Holud />
        <Gifts />
      </div>
    </>
  );
}

export default App;
