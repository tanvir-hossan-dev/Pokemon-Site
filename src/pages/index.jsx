import Image from "next/image";
import styles from "./../styles/Home.module.css";
import logo from "./../assests/Logo.png";
import sideImg from "./../assests/Left.png";
import Img1 from "./../assests/Image01.png";
import Img2 from "./../assests/Image02.png";
import Img3 from "./../assests/Image03.png";
import Img4 from "./../assests/Image04.png";
import Img5 from "./../assests/Image05.png";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <>
      <div>
        <Head>
          <title>Pokemon</title>
        </Head>
      </div>
      <section>
        <div className={styles.bg_img}>
          <div className="max-w-[1200px] mx-auto px-[10px]">
            <div className="flex justify-center">
              <Image src={logo} width="200" height="200" alt="" />
            </div>

            <div className="mt-[100px] grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6 md:grid-cols-2 md:gap-2 ">
              {data?.map((item) => {
                const { types } = item;

                return (
                  <div key={item.id} className={styles.card}>
                    <Link href={`/card/${item.id}`}>
                      <div className={styles.cardImgbox}>
                        <p className=" font-ubunto font-normal">#010</p>
                        <div className="flex justify-center">
                          <img
                            className={`${styles.img} max-h-full max-w-full  lg:h-[200px] md:max-h-[200px] `}
                            clas
                            src={item.sprites.front_default}
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <h2 className={`${styles.cardTitle} mt-2  ml-2 font-ubunto font-medium capitalize`}>
                          {item.species.name}
                        </h2>
                        <div className="mt-2">
                          {types[0]?.type?.name === "grass" && (
                            <button
                              className={` py-[3px] px-[12px] mb-2 rounded-md text-white bg-green-400 capitalize  mr-4 font-ubunto font-normal`}
                            >
                              {types[0]?.type?.name}
                            </button>
                          )}
                          {types[0]?.type?.name === "fire" && (
                            <button
                              className={` py-[3px] px-[12px] mb-2 rounded-md text-white bg-red-400 capitalize  mr-4 font-ubunto font-normal`}
                            >
                              {types[0]?.type?.name}
                            </button>
                          )}
                          {types[0]?.type?.name === "water" && (
                            <button
                              className={` py-[3px] px-[12px] mb-2 rounded-md text-white bg-blue-500 capitalize  mr-4 font-ubunto font-normal`}
                            >
                              {types[0]?.type?.name}
                            </button>
                          )}
                          {types[1]?.type?.name === "flying" && (
                            <button
                              style={{
                                background: "linear-gradient(to bottom, #93C6E7, #EAE0DA)",
                              }}
                              className={` py-[3px] px-[12px] mb-2 rounded-md text-white  capitalize  mr-4 font-ubunto font-normal`}
                            >
                              {types[1]?.type?.name}
                            </button>
                          )}
                          {types[1]?.type?.name === "poison" && (
                            <button
                              className={` py-[3px] px-[12px] mb-2 rounded-md text-white bg-[#c051a8] capitalize  mr-4 font-ubunto font-normal`}
                            >
                              {types[1]?.type?.name}
                            </button>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-[100px] max-w-[100%] flex justify-between">
        <Image className="h-screen hidden lg:block md:hidden" src={sideImg} width="auto" height="auto" alt="" />
        <div className=" max-w-[1200px] px-[10px] mx-auto">
          <div className="flex justify-center ">
            <div className={`w-[200px] lg:w-[400px]  ${styles.content_heading}`}>
              <h1 className="text-center font-ubunto text-[20px]  lg:text-[32px] font-bold text-sky-700">
                Ash & Pikacu Arrive in Pokemen Universe
              </h1>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between gap-4">
                <div className="w-3/4">
                  <p className="mb-2 font-ubunto font-normal text-[12px] lg:text-[18px] lg-[14px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aspernatur minus nesciunt reiciendis
                    dolores, tenetur eos nisi perspiciatis. A inventore vel, dolor veniam rerum quibusdam?
                  </p>
                  <div className="flex justify-between  gap-4 mb-2">
                    <p className="w-2/3 font-ubunto font-normal text-[12px] lg:text-[18px] lg-[14px]">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Image className="w-1/3 h-auto max-w-full" src={Img4} width="" height="20px" alt="" />
                  </div>
                  <p className="font-ubunto font-normal text-[12px] lg:text-[18px] lg-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit voluptates totam unde eos, neque quia
                    nihil quam rerum, error animi nobis amet earum tempora in.
                  </p>
                </div>
                <div className="mb-2 w-1/4  ">
                  {" "}
                  <Image className="max-w-full h-auto mb-4" src={Img3} width="auto" height="auto" alt="" />
                  <Image className="max-w-full h-auto" src={Img2} width="auto" height="auto" alt="" />
                </div>
              </div>
              <p className="font-ubunto font-normal text-[12px] lg:text-[18px] lg-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum voluptatibus ut distinctio
                officia commodi, sint quos modi molestias quis. Aspernatur repellendus exercitationem sed itaque dolorem
                ipsa et corporis, natus impedit sapiente, asperiores, harum quibusdam. Labore esse omnis expedita quo!
              </p>
            </div>
            <div>
              <p className="mb-2 font-ubunto font-normal text-[12px] lg:text-[18px] lg-[14px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam hic porro blanditiis deleniti debitis
                ad harum id perferendis quaerat quod est, iste eos possimus? Obcaecati animi tempora fugit.
              </p>
              <div className="flex justify-between gap-4 mb-4">
                <Image className="w-1/4 " width="auto" height="auto" src={Img5} alt="" />
                <p className="w-3/4 font-ubunto font-normal text-[12px] lg:text-[18px] lg-[14px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis, quos aliquam vero
                  doloribus error eos animi voluptate sint veritatis.
                </p>
              </div>
              <div className="flex justify-between gap-4 mb-2">
                <Image className="w-1/4" width="auto" height="auto" src={Img1} alt="" />
                <p className="w-3/4 font-ubunto font-normal text-[12px] lg:text-[18px] lg-[14px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere perspiciatis, quos aliquam vero
                  doloribus error eos animi voluptate sint veritatis.
                </p>
              </div>
              <p className="font-ubunto font-normal text-[12px] lg:text-[18px] lg-[14px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptatem iusto fugiat reprehenderit
                quas impedit? Officiis error totam accusamus perspiciatis, ullam repudiandae adipisci a atque officia
                iusto rerum modi beatae?
              </p>
            </div>
          </div>
        </div>
        <Image className="h-screen hidden lg:block md:hidden" src={sideImg} width="auto" height="auto" alt="" />
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      url
      name
      image
    }
  }
}`;

  const gqlVariables = {
    limit: 8,
    offset: 0,
  };

  const res = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: "POST",
  });

  const { data } = await res.json();

  const data1 = await Promise.all(
    data?.pokemons?.results?.map(async (item) => {
      const { data } = await axios.get(item.url);

      return { ...data };
    })
  );

  return {
    props: {
      data: data1,
    },
  };
};
