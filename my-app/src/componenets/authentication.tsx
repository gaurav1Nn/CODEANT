import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
export function Authentication() {
  return (
    <div className="bg-[#fafafa] md:flex md:flex-row md:justify-center md:items-center h-[100vh] border-[1px] border-[#f3f2f2]">
      <div className="bg-[#ffffff] h-[100vh] md:flex flex-col items-center justify-center w-[50%]  hidden">
        <div className="md:flex flex-col items-end relative ">
          <div className="flex flex-col bg-white rounded-xl h-max shadow-xl pb-[1rem]">
            <div className="p-4 font-semibold text-lg pr-[5rem] flex flex-row items-center justify-center font-[inter]  gap-2">
              <img src="./Group 37110.png" alt="" />
              <p>AI to Detect & Autofix Bad Code</p>
            </div>
            <hr className="h-[1px] w-full bg-[#f3f2f2]" />
            <div className="flex flex-row gap-6 p-4 items-center">
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">30+</p>
                <p className="text-gray-600">Langage Support</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">10K+</p>
                <p className="text-gray-600">Developers</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold">100K+</p>
                <p className="text-gray-600">Hours Saved</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[15rem] relative top-[-2rem] left-[6rem] shadow-xl p-5 rounded-2xl flex flex-col gap-2 mt-4 border-[1px] border-[#f3f2f2]">
          <div className="flex flex-row items-center justify-between">
            <img src="/signin.png" alt="" />
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-row items-center text-[#0049c6] justify-center">
                <img src="./arrow.png" alt="" />
                <p>14%</p>
              </div>
              <p className="text-gray-600 text-sm pl-2">This week</p>
            </div>
          </div>
          <p>Issues Fixed</p>
          <p className="text-3xl font-semibold">500K+</p>
        </div>
        <img
        src="/Subtract.png"
        alt=""
        className="hidden md:block absolute bottom-0 left-0"
      />
      </div>
      <div className="flex flex-col items-center justify-center h-[100vh] gap-2 md:w-[50%] w-full">
        <div className="bg-white h-[32rem] md:h-[35rem] rounded-md flex flex-col items-center w-[22rem] md:w-max pt-4 gap-5 border-[1px] border-[#f3f2f2] animate-fade-in">
          <div className="flex flex-row items-center justify-center font-[inter] text-3xl font-light gap-2">
            <img src="/Group 37110.png" alt="" />
            <p>CodeAnt AI</p>
          </div>
          <h1 className="font-semibold text-3xl">Welcome to CodeAnt AI</h1>
          <div className="flex flex-row gap-2 items-center md:p-4">
            <NavLink
              to="/auth/saas"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "bg-[#1470ef] text-white text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md"
                  : "bg-[#fafafa] text-black text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md"
              }
            >
              SAAS
            </NavLink>
            <NavLink
              to="self-hosted"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "bg-[#1470ef] text-white text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md"
                  : "bg-[#fafafa] text-black text-center text-2xl p-2 w-[10rem] md:w-[15rem] rounded-md"
              }
            >
              Self Hosted
            </NavLink>
          </div>
          <hr className="h-[1px] w-full bg-[#f3f2f2]" />
          <Outlet />
        </div>
        <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          By signing up you agree to the{" "}
          <span className="font-semibold">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
}
export function SAAS() {
  return (
    <div className="flex flex-col items-center w-full gap-5 md:pl-4 md:pr-4 md:pb-4">
      {data.map((item, index) => (
        <Options 
          key={item.text}
          img={item.img} 
          text={item.text} 
          onClick="/app/repositories"
          delay={index * 0.1} 
        />
      ))}
    </div>
  );
}
export function Self() {
  return (
    <div className="flex flex-col items-center w-full gap-5 md:pl-4 md:pr-4 md:pb-4">
      <Options
        img="/gitlab.png"
        text="Self Hosted Gitlab"
        onClick="/app/repositories"
        delay={0}
      />
      <Options
        img="/key.png"
        text="Sign in with SSO"
        onClick="/app/repositories"
        delay={0.1}
      />
    </div>
  );
}
function Options({
  img,
  text,
  onClick,
  delay = 0,
}: {
  img: string;
  text: string;
  onClick: string;
  delay?: number;
}) {
  return (
    <NavLink
      to={onClick}
      className="flex flex-row justify-center items-center font-semibold border-[1px] w-[20rem] md:w-[25rem] border-[#e5e4e4] gap-4 p-2 rounded-lg cursor-pointer hover:scale-[1.02] hover:border-gray-400 transition-all animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <img src={img} alt="" />
      <p>{text}</p>
    </NavLink>
  );
}
const data = [
  {
    img: "/github.png",
    text: "Sign in with Github",
    onClick: "",
  },
  {
    img: "/bitbucket.png",
    text: "Sign in with Bitbucket",
    onClick: "",
  },
  {
    img: "/azure.png",
    text: "Sign in with Azure DveOps",
    onClick: "",
  },
  {
    img: "/gitlab.png",
    text: "Sign in with Gitlab",
    onClick: "",
  },
];
export default Authentication;
