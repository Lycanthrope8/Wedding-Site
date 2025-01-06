import bismillah from "./assets/bismillah.png";
import corner from "./assets/corner.png";
import Navbar from "./components/navbar";
import Nikkah from "./components/nikkah";

function App() {
  return (
    <>
      <div className="h-screen bg-gradient-to-tr from-[#d1cfc5] to-[#e2e0cc] ">
        <img
          src={corner}
          alt="Corner"
          className="absolute top-0 left-0 size-24 lg:size-40 scale-x-[-1] -rotate-90"
        />
        <img
          src={corner}
          alt="Corner"
          className="absolute top-0 right-0 size-24 lg:size-40 rotate-90"
        />
        {/* </div> */}
        <img
          src={bismillah}
          alt="Bismillah"
          className="w-2/6 lg:w-1/6 mx-auto pt-2"
        />
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
      </div>
    </>
  );
}

export default App;
