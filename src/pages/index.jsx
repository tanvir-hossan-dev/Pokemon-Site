import Image from "next/image";
import styles from "./../styles/Home.module.css";
import logo from "./../assests/Logo.png";
import img1 from "./../assests/Image01.png";
import sideImg from "./../assests/Left.png";
import Img2 from "./../assests/Image02.png";
import Img1 from "./../assests/Image01.png";
import Img3 from "./../assests/Image03.png";
import axios from "axios";

export default function Home({ data }) {
  return (
    <>
      <section>
        <div className={styles.bg_img}>
          <div className="w-[1200px] m-auto">
            <div className="flex justify-center">
              <Image src={logo} width="200" height="200" alt="" />
            </div>
            <div className="mt-[100px] grid grid-cols-4 gap-6 lg:grid-cols-4 lg:gap-6">
              {data?.map((item) => {
                const { types } = item;
                console.log(types);
                return (
                  <div key={item.id} className={styles.card}>
                    <div className={styles.cardImgbox}>
                      <p className=" font-ubunto font-normal">#010</p>
                      <div className="flex justify-center">
                        <img className={styles.img} src={item.sprites.front_default} alt="" />
                      </div>
                    </div>
                    <div>
                      <h2 className={`${styles.cardTitle} mt-2 ml-2 font-ubunto font-medium capitalize`}>
                        {item.species.name}
                      </h2>
                      <div className="mt-2">
                        {types[0]?.type?.name === "grass" && (
                          <button
                            className={` py-[3px] px-[12px] rounded-md text-white bg-green-400 capitalize  mr-4 font-ubunto font-normal`}
                          >
                            {types[0]?.type?.name}
                          </button>
                        )}
                        {types[0]?.type?.name === "fire" && (
                          <button
                            className={` py-[3px] px-[12px] rounded-md text-white bg-red-400 capitalize  mr-4 font-ubunto font-normal`}
                          >
                            {types[0]?.type?.name}
                          </button>
                        )}
                        {types[0]?.type?.name === "water" && (
                          <button
                            className={` py-[3px] px-[12px] rounded-md text-white bg-blue-500 capitalize  mr-4 font-ubunto font-normal`}
                          >
                            {types[0]?.type?.name}
                          </button>
                        )}
                        {types[1]?.type?.name === "flying" && (
                          <button
                            style={{
                              background: "linear-gradient(to bottom, #93C6E7, #EAE0DA)",
                            }}
                            className={` py-[3px] px-[12px] rounded-md text-white  capitalize  mr-4 font-ubunto font-normal`}
                          >
                            {types[1]?.type?.name}
                          </button>
                        )}
                        {types[1]?.type?.name === "poison" && (
                          <button
                            className={` py-[3px] px-[12px] rounded-md text-white bg-[#c051a8] capitalize  mr-4 font-ubunto font-normal`}
                          >
                            {types[1]?.type?.name}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100%] flex justify-between">
        <Image className="h-screen" src={sideImg} width="" height="" alt="" />
        <div className="my-[100px] w-[1200px] m-auto">
          <div className="flex justify-center">
            <div className={`w-[400px]  ${styles.content_heading}`}>
              <h1 className="text-center font-ubunto text-[32px] font-bold text-sky-700">
                Ash & Pikacu Arrive in Pokemen Universe
              </h1>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ad cupiditate mollitia
                    consequatur necessitatibus? Quod minima, modi mollitia!
                  </p>
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ipsa maxime alias eum a maiores.
                    </p>
                    <Image src={Img3} width="200px" height="200px" alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptates totam unde eos, neque quia
                    nihil quam rerum, error animi nobis amet earum tempora in.
                  </p>
                </div>
                <div className="mb-2 w-[200px] grid grid-rows-2 ">
                  <div className="mb-2 ">
                    {" "}
                    <Image className="" src={Img1} width="" height="" alt="" />
                  </div>
                  <div>
                    <Image src={Img3} width="" height="" alt="" />
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum voluptatibus ut distinctio
                officia commodi, sint quos modi molestias quis. Aspernatur repellendus exercitationem sed itaque dolorem
                ipsa et corporis, natus impedit sapiente, asperiores, harum quibusdam. Labore esse omnis expedita quo!
              </p>
            </div>
            <div>
              <p className="mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam hic porro blanditiis deleniti debitis
                ad harum id perferendis quaerat quod est, iste eos possimus? Obcaecati animi tempora fugit, molestiae
                suscipit blanditiis cupiditate minima totam eos sequi eum omnis tenetur facilis.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Image className="" src={Img1} alt="" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis, quos aliquam vero
                  doloribus error eos animi voluptate sint veritatis.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Image className="" src={Img1} alt="" />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis, quos aliquam vero
                  doloribus error eos animi voluptate sint veritatis.
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptatem iusto fugiat reprehenderit
                quas impedit? Officiis error totam accusamus perspiciatis, ullam repudiandae adipisci a atque officia
                iusto rerum modi beatae?
              </p>
            </div>
          </div>
        </div>
        <Image className="h-screen" src={sideImg} width="" height="" alt="" />
      </section>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const array = res.data.results.slice(0, 8);

  const data = await Promise.all(
    array.map(async (item) => {
      const { data } = await axios.get(item.url);

      return { ...data };
    })
  );

  return {
    props: {
      data: data,
    },
  };
};
