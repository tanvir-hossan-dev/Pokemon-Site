import { useRouter } from "next/router";
import sideImg from "./../../assests/Left.png";
import logo from "./../../assests/Logo.png";
import Image from "next/image";
import axios from "axios";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

const SingleCard = ({ data }) => {
  const router = useRouter();

  const { types } = data || {};

  return (
    <div className="w-[100%] flex justify-between">
      <Image className="h-screen" src={sideImg} width="" height="" alt="" />

      <div className="my-[40px] w-[1200px] m-auto">
        <div className="flex justify-center">
          <Image src={logo} width="200" height="200" alt="" />
        </div>
        <div className="mt-[30px] grid grid-cols-3 gap-6 lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-4 sm:grid-cols-1 sm:gap-4">
          <div>
            <h2 className="mb-2 text-blue-500 capitalize text-[42px] font-ubunto font-bold">{data?.name}</h2>
            <p className="mb-4  text-[18px] font-ubunto font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore accusantium nostrum distinctio
              laborum. Eum nulla ullam asperiores atque libero!
            </p>
            <div
              style={{ clipPath: "polygon(0% 0%, 100% 0, 100% 70%, 75% 100%, 0% 100%)" }}
              className={` w-3/4 p-6 bg-gray-200 rounded-md grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-4`}
            >
              <div>
                <h3 className="font-ubunto font-semibold text-[22px]">Height</h3>
                <p className="font-ubunto">{data?.height}</p>
              </div>
              <div>
                <h3 className="font-ubunto font-semibold text-[22px]">Category</h3>
                <p className="font-ubunto">Seed</p>
              </div>
              <div>
                <h3 className="font-ubunto font-semibold text-[22px]">Weight</h3>
                <p className="font-ubunto">{data?.weight}</p>
              </div>
              <div>
                <h3 className="font-ubunto font-semibold text-[22px]">Abilities</h3>
                <p className="font-ubunto">{data?.abilities[0]?.ability?.name}</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-full hover:scale-125 transition-all duration-300 "
              src={data?.sprites?.front_default}
              alt=""
            />
          </div>
          <div>
            <div className="mb-2">
              <h3 className="font-ubunto font-medium text-[22px]">Type</h3>
              <div className="mt-2">
                {data?.types[0]?.type?.name === "grass" && (
                  <button
                    className={` py-[3px] px-[12px] rounded-md text-white bg-green-400 capitalize  mr-4 font-ubunto font-normal`}
                  >
                    {types[0]?.type?.name}
                  </button>
                )}
                {data?.types[0]?.type?.name === "fire" && (
                  <button
                    className={` py-[3px] px-[12px] rounded-md text-white bg-red-400 capitalize  mr-4 font-ubunto font-normal`}
                  >
                    {types[0]?.type?.name}
                  </button>
                )}
                {data?.types[0]?.type?.name === "water" && (
                  <button
                    className={` py-[3px] px-[12px] rounded-md text-white bg-blue-500 capitalize  mr-4 font-ubunto font-normal`}
                  >
                    {types[0]?.type?.name}
                  </button>
                )}
                {data?.types[1]?.type?.name === "flying" && (
                  <button
                    style={{
                      background: "linear-gradient(to bottom, #93C6E7, #EAE0DA)",
                    }}
                    className={` py-[3px] px-[12px] rounded-md text-white  capitalize  mr-4 font-ubunto font-normal`}
                  >
                    {types[1]?.type?.name}
                  </button>
                )}
                {data?.types[1]?.type?.name === "poison" && (
                  <button
                    className={` py-[3px] px-[12px] rounded-md text-white bg-[#c051a8] capitalize  mr-4 font-ubunto font-normal`}
                  >
                    {types[1]?.type?.name}
                  </button>
                )}
              </div>
            </div>
            <div className="mb-2">
              <h3 className="font-ubunto font-medium text-[22px]">Weaknesses</h3>
              <div className="mt-2">
                <button
                  className={` py-[3px] px-[12px] rounded-md text-white bg-red-400 capitalize  mr-4 font-ubunto font-normal`}
                >
                  fire
                </button>
                <button
                  className={` py-[3px] px-[12px] rounded-md text-white bg-[#cf67b8] capitalize  mr-4 font-ubunto font-normal`}
                >
                  psychic
                </button>

                <button
                  style={{
                    background: "linear-gradient(to bottom, #93C6E7, #EAE0DA)",
                  }}
                  className={` py-[3px] px-[12px] rounded-md text-white  capitalize  mr-4 font-ubunto font-normal`}
                >
                  flying
                </button>

                <button
                  className={` py-[3px] px-[12px] rounded-md text-white bg-blue-500 capitalize  mr-4 font-ubunto font-normal`}
                >
                  ice
                </button>
              </div>
            </div>
            <div className="mb-2">
              <h3 className="font-ubunto font-medium text-[22px] mb-4">Status</h3>
              {data?.stats?.map((item, index) => (
                <div key={index}>
                  <p className="font-ubunto">{item.stat.name}</p>
                  <progress className="progress progress-primary w-full" value={item.base_stat} max="100"></progress>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <button className="flex items-center  bg-yellow-400 text-[20px] text-white font-ubunto font-normal border-[6px] border-solid border-blue-500 rounded-sm  py-3 px-10">
              <AiFillHome className="mr-4" />
              Back To Home page
            </button>
          </Link>
        </div>
      </div>
      <Image className="h-screen" src={sideImg} width="" height="" alt="" />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  const { id } = params;
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return {
    props: {
      data: data,
    },
  };
};

export default SingleCard;
