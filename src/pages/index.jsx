import Image from "next/image";
import styles from "./../styles/Home.module.css";
import logo from "./../assests/Logo.png";
import img1 from "./../assests/Image01.png";

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.bg_img}>
          <div className="w-[1200px] m-auto">
            <div className="flex justify-center">
              <Image src={logo} width="200" height="200" alt="" />
            </div>
            <div className="mt-[100px] grid grid-cols-4 gap-6">
              <div className={styles.card}>
                <div className={styles.cardImgbox}>
                  <p className=" font-ubunto font-normal">this is id</p>
                  <div className="flex justify-center">
                    <Image className={styles.img} src={img1} width="150" height="150" alt="img" />
                  </div>
                </div>
                <div>
                  <h2 className={`${styles.cardTitle} mt-2 font-ubunto font-normal`}>title</h2>
                  <div className="mt-2">
                    <button
                      className={` py-[3px] px-[12px] rounded-md ${
                        "tanvir" === "tanvir" && "bg-white"
                      }  mr-4 font-ubunto font-normal`}
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImgbox}>
                  <p>this is id</p>
                  <div className="flex justify-center">
                    <Image className={styles.img} src={img1} width="150" height="150" alt="img" />
                  </div>
                </div>
                <div>
                  <h2 className={`${styles.cardTitle} mt-2`}>title</h2>
                  <div className="mt-2">
                    <button className={` py-[3px] px-[12px] rounded-md ${"tanvir" === "tanvir" && "bg-white"}  mr-4`}>
                      Button
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImgbox}>
                  <p>this is id</p>
                  <div className="flex justify-center">
                    <Image className={styles.img} src={img1} width="150" height="150" alt="img" />
                  </div>
                </div>
                <div>
                  <h2 className={`${styles.cardTitle} mt-2`}>title</h2>
                  <div className="mt-2">
                    <button className={` py-[3px] px-[12px] rounded-md ${"tanvir" === "tanvir" && "bg-white"}  mr-4`}>
                      Button
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImgbox}>
                  <p>this is id</p>
                  <div className="flex justify-center">
                    <Image className={styles.img} src={img1} width="150" height="150" alt="img" />
                  </div>
                </div>
                <div>
                  <h2 className={`${styles.cardTitle} mt-2`}>title</h2>
                  <div className="mt-2">
                    <button className={` py-[3px] px-[12px] rounded-md ${"tanvir" === "tanvir" && "bg-white"}  mr-4`}>
                      Button
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImgbox}>
                  <p>this is id</p>
                  <div className="flex justify-center">
                    <Image className={styles.img} src={img1} width="150" height="150" alt="img" />
                  </div>
                </div>
                <div>
                  <h2 className={`${styles.cardTitle} mt-2`}>title</h2>
                  <div className="mt-2">
                    <button className={` py-[3px] px-[12px] rounded-md ${"tanvir" === "tanvir" && "bg-white"}  mr-4`}>
                      Button
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImgbox}>
                  <p>this is id</p>
                  <div className="flex justify-center">
                    <Image className={styles.img} src={img1} width="150" height="150" alt="img" />
                  </div>
                </div>
                <div>
                  <h2 className={`${styles.cardTitle} mt-2`}>title</h2>
                  <div className="mt-2">
                    <button className={` py-[3px] px-[12px] rounded-md ${"tanvir" === "tanvir" && "bg-white"}  mr-4`}>
                      Button
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImgbox}>
                  <p>this is id</p>
                  <div className="flex justify-center">
                    <Image className={styles.img} src={img1} width="150" height="150" alt="img" />
                  </div>
                </div>
                <div>
                  <h2 className={`${styles.cardTitle} mt-2`}>title</h2>
                  <div className="mt-2">
                    <button className={` py-[3px] px-[12px] rounded-md ${"tanvir" === "tanvir" && "bg-white"}  mr-4`}>
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
