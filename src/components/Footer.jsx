import { Link } from "@tanstack/react-router";
import Logo from "../assets/logo.png";
function Footer() {
  return (
    <footer className="border-t border-[var(--specific-color)] mt-[2rem] ">
      <div className="  flex flex-col  gap-[2rem] py-[2rem] w-[80%] m-auto md:flex-row justify-between md: md:w-[95%]">
        {/* logo */}
        <div className=" md:flex gap-4 md:items-start md:gap-12">
          <Link to={"/"} className="flex items-center  gap-2">
            <div className="h-[2.5rem] w-[2.5rem] flex lg:w[3rem] lg:w-[3rem] items-center">
              <img src={Logo} alt="logo" />
            </div>
            <h1 className="uppercase">Sumu Clothing</h1>
          </Link>
          {/* nav */}
          <ul className="capitalize text-gray-500 flex flex-col  text-[1.1rem] gap-4 pt-[2rem] md:pt-0 ">
            <li>
              <a className="hover:underline " href="">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline " href="">
                about
              </a>
            </li>
            <li>
              <a className="hover:underline " href="">
                terms and conditions
              </a>
            </li>
            <li>
              <a className="hover:underline " href="">
                shipping and return policy
              </a>
            </li>
            <li>
              <a className="hover:underline " href="">
                privacy policy
              </a>
            </li>
            <li className="uppercase hover:underline">
              <a href="">faq</a>
            </li>
          </ul>
        </div>
        <div>
          <button className=" border border-[var(--specific-color)]  text-[0.8rem] py-1.5 px-4 bg-white rounded-[6px] cursor-pointer ">
            Deploy
          </button>
        </div>
      </div>
      <div className="text-[0.8rem] flex flex-col justify-center items-center border-t py-[1.5rem] border-[var(--specific-color)] text-gray-400 px-[6px]">
        <div className="flex justify-center">
          <p>@2023-2025 SUMU, Inc.</p>
          <p>Allright reserved.</p>
        </div>
        <p>view the source</p>
      </div>
    </footer>
  );
}
export default Footer;
