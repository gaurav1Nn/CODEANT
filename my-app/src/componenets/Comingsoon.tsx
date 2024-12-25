import { BsHourglassSplit } from "react-icons/bs";

function Comingsoon() {
 return (
   <div className="flex flex-col md:flex-row text-[2rem] gap-2 md:text-[4rem] font-bold justify-center items-center h-[100vh]">
     <BsHourglassSplit className="text-[#212121] w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"/>
     <h1>Coming Soon</h1>
   </div>
 );
}

export default Comingsoon;
