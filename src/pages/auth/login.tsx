import { BaseLayout } from "../../layouts/BaseLayout";
import { useRouter } from "next/router";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();
  const onLogin = () => {
    router.push("/");
  };
  return (
    <>
      <div className="lg:grid grid-cols-2 lg:h-full">
        <div className="col-span-1 relative lg:mt-0 mt-[60px]">
          <div
            className="absolute top-0 left-0 w-full h-full 2xl:border-r-[5px] xl:border-r-[3px] border-r-[2px] blur-[3px] z-10"
            style={{ borderColor: "rgba(204, 204, 204, 0.6)" }}
          ></div>
          <div className="flex flex-col justify-center items-center h-full">
            <div
              className="font-Inter font-[600] 2xl:text-[192px] xl:text-[160px] lg:text-[130px] md:text-[80px] sm:text-[60px] text-[50px] tracking-[0.2em] text-center"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              ORBIT
            </div>
            <div
              className="font-Inter font-[600] 2xl:text-[30px] xl:text-[24px] md:text-[16px] tex-[12px] tracking-[0.2em] text-center"
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
            >
              THE ULTIMATE WEB3 CONTENT EXPERIENCE
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col lg:mt-0 mt-[70px]">
          <div className="2xl:w-[745px] xl:w-[560px] lg:w-[460px] md:w-[400px] sm:w-[360px] w-[320px] 2xl:h-[726px] xl:h-[620px] lg:h-[500px] h-[400px] my-auto 2xl:ml-[80px] xl:ml-[60px] lg:ml-[45px] mx-auto relative flex justify-center">
            <div
              className="absolute top-0 left-0 my-auto bottom-0 w-full h-full opacity-[0.6] rounded-[49px] border-[3px] border-borderwhite"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
              }}
            ></div>
            <div className="flex flex-col justify-center items-center">
              <Image
                alt="earth"
                src="/static/images/icons/earth.png"
                className="2xl:w-[192px] xl:w-[150px] w-[80px] 2xl:h-[192px] xl:h-[150px] h-[80px] cursor-pointer z-10"
                width={192}
                height={192}
              />
              <div className="2xl:w-[533px] xl:w-[400px] lg:w-[300px] w-[220px] 2xl:h-[63px] xl:h-[50px] h-[40px] relative">
                <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-formback blur-[2px] z-1"></div>
                <input
                  type="text"
                  placeholder="USERNAME"
                  className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-transparent text-textwhite pl-[55px] z-10 placeholder:text-placehd1"
                />
                <div className="absolute my-auto top-0 bottom-0 flex items-center pl-[17px] z-1">
                  <Image
                    alt="person"
                    src="/static/images/icons/person.png"
                    className="w-[25px] h-[25px]"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div className="2xl:w-[533px] xl:w-[400px] lg:w-[300px] w-[220px] 2xl:h-[63px] xl:h-[50px] h-[40px] relative mt-[52px]">
                <div className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-formback blur-[2px] z-1"></div>
                <input
                  type="password"
                  placeholder="PASSWORD"
                  className="absolute top-0 left-0 w-full h-full rounded-[20px] bg-transparent text-textwhite pl-[55px] z-10 placeholder:text-placehd1"
                />
                <div className="absolute my-auto top-0 bottom-0 flex items-center pl-[17px] z-1">
                  <Image
                    alt="lock"
                    src="/static/images/icons/lock.png"
                    className="w-[25px] h-[25px]"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div
                className="2xl:w-[200px] xl:w-[160px] w-[120px] 2xl:h-[67px] xl:h-[60px] h-[50px] mt-[52px] bg-formback rounded-[20px] border-[2px] border-borderwhite font-[600] 2xl:text-[30px] xl:text-[22px] lg:text-[18px] text-[12px] text-textwhite z-10 flex justify-center items-center cursor-pointer"
                onClick={onLogin}
              >
                LOGIN
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
LoginPage.getLayout = (page) => {
  return <BaseLayout>{page}</BaseLayout>;
};
export default LoginPage;
