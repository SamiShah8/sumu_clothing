import Hero from "../assets/hero.png";
export default function Home() {
  return (
    <div>
      <div className="relative hero ">
        <img src={Hero} alt="hero img" className="w-screen opacity-8 border " />
        <div className="absolute top-0 flex w-[90%] m-auto justify-between">
          <div className="flex flex-col gap-4 w-[50%]">
            <h2 className="text-2xl capitalize bold text-red-800 ">
              Sumu Clothing
            </h2>
            <h1 className="text-4xl capitalize bold">shop for what you want</h1>
            <p1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, est
              consequatur deleniti amet delectus cumque pariatur tenetur et
              recusandae iure!
            </p1>
          </div>
          <div  className="[w-50%]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              magnam aperiam aut non incidunt numquam, culpa dolorem quae modi
              enim ea fuga pariatur aliquid quod cumque blanditiis officia velit
              ab minima totam eligendi vitae delectus. Ipsam eaque nobis fugit
              culpa aliquid repudiandae optio similique suscipit temporibus quo.
              Incidunt, tempora culpa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
