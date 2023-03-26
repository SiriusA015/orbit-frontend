import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { IUser } from "../types";

const HomePage = () => {
  const [user, setUser] = useState<IUser>({
    name: "Kalle",
    email: "kalle@orbit.com",
  });

  return (
    <>
      <div className="lg:grid grid-cols-3 w-full h-full 2xl:px-[83px] xl:px-[70px] lg:px-[50px] px-[30px]">
        <div className="col-span-1 2xl:mt-[96px] xl:mt-[110px] lg:mt-[130px] mt-[70px] 2xl:mb-[60px] xl:mb-[90px] mb-[130px] relative lg:py-0 py-[30px]">
          <div
            className="absolute w-full h-full top-0 left-0 opacity-[0.6] border-[2px] border-[#949494] rounded-[50px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
            }}
          ></div>
          <div className="w-full h-full 2xl:px-[130px] xl:px-[100px] px-[60px] 2xl:py-[25px] py-[10px] flex flex-col justify-center 2xl:gap-[20px] gap-[10px] relative">
            <div className="relative w-full 2xl:h-[80px] xl:h-[60px] h-[50px] rounded-[20px]">
              <input
                type="text"
                placeholder="ENTER TITLE..."
                className=" placeholder:text-placehd w-full h-full rounded-[20px] bg-transparent pl-[20px] font-[700] 2xl:text-[28px] xl:text-[24px] text-[19px] text-white text-center absolute top-0 left-0 z-10"
                style={{ textOverflow: "ellipsis" }}
              />
              <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-formback blur-[3px] z-1"></div>
            </div>
            <div className="w-full h-[120px] flex flex-col items-center justify-center relative">
              <div className="absolute w-full h-full top-0 left-0 bg-formback rounded-[20px] blur-[3px]"></div>
              <div className="font-Inter font-[600] text-[#F4F4F4] 2xl:text-[26px] xl:text-[22px] text-[16px] z-10">
                MEDIA UPLOAD:
              </div>
              <div className="2xl:w-[145px] xl:w-[120px] w-[96px] 2xl:h-[43px] xl:h-[38px] h-[30px] bg-formback border-[2px] border-[#949494] rounded-[20px] cursor-pointer font-Inter font-[500] text-textwhite 2xl:text-[14px] text-[12px] flex justify-center items-center z-10">
                BROWSE FILES
              </div>
            </div>
            <div className="xl:absolute 2xl:top-[170px] top-[190px] 2xl:right-[18px] right-[2px] 2xl:w-[100px] xl:w-[100px] w-[100px] 2xl:h-[60px] h-[40px] bg-formback rounded-[20px] mx-auto border-[2px] border-[#949494] flex justify-center items-center text-white 2xl:text-[16px] xl:text-[14px] text-[14px] font-[600] cursor-pointer">
              ADD TAG(S)
            </div>
            <div className="relative w-full h-[220px] rounded-[20px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-formback rounded-[20px] blur-[3px]"></div>
              <div className="font-Inter font-[600] text-[#F4F4F4] 2xl:text-[28px] xl:text-[24px] text-[18px] z-10">
                DESCRIPTION:
              </div>
              <textarea
                className="w-[80%] 2xl:h-[170px] xl:h-[140px] h-[100px] bg-[#BFBFBF] rounded-[20px] p-[10px] 2xl:mb-[15px] mb-[7px] z-10 resize-none text-[#000000] font-[600] 2xl:text-[20px] xl:text-[16px] text-[12px] overflow-hidden"
                style={{
                  textOverflow: "ellipsis",
                  height: "calc(100% - 40px)",
                }}
              />
            </div>
            <div className="2xl:w-[100px] xl:w-[80px] w-[70px] 2xl:h-[40px] xl:h-[35px] h-[30px] bg-formback rounded-[13px] mx-auto border-[2px] border-[#949494] flex justify-center items-center font-Inter font-[600] text-textwhite 2xl:text-[18px] xl:text-[16px] text-[12px] cursor-pointer">
              POST
            </div>
          </div>
        </div>
        <div className="col-span-1 2xl:mx-[118px] xl:mx-[60px] lg:mx-[50px] mx-[20px] flex flex-col justify-center items-center">
          <img
            alt="up"
            src="/static/images/icons/up.png"
            className="mx-auto 2xl:w-[80px] xl:w-[70px] w-[60px] 2xl:h-[80px] xl:h-[70px] h-[60px] cursor-pointer"
          />
          <div className="relative w-full 2xl:h-[557px] xl:h-[520px] lg:h-[400px] h-[370px]">
            <div
              className="absolute w-full h-full top-0 left-0 opacity-[0.6] border-[2px] border-[#949494] rounded-[50px]"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
              }}
            ></div>
            <div className="flex flex-row pt-[14px] pl-[30px] items-center">
              <img
                alt="avatar"
                src="/static/images/user/user1.png"
                className="2xl:w-[55px] xl:w-[46px] w-[40px] 2xl:h-[55px] xl:h-[46px] h-[40px] z-10"
              />
              <div className="font-Inter font-[600] 2xl:text-[28px] xl:text-[22px] text-[18px] text-textwhite ml-[5px] z-10">
                {user.name}
              </div>
            </div>
            <div className="mt-[8px] w-full border-[1px] border-[#C5C5C5] z-10"></div>
            <div
              className="mx-[13px] mt-[13px] relative"
              style={{ height: "calc(100% - 110px)" }}
            >
              <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-formback z-100 blur-[3px]"></div>
            </div>
          </div>
          <img
            alt="down"
            src="/static/images/icons/down.png"
            className="mx-auto 2xl:w-[80px] xl:w-[70px] w-[60px] 2xl:h-[80px] xl:h-[70px] h-[60px] cursor-pointer"
          />
        </div>
        <div className="col-span-1 relative 2xl:my-[131px] xl:my-[100px] lg:my-[180px] my-[70px] lg:py-0 py-[30px]">
          <div
            className="absolute w-full h-full top-0 left-0 border-[2px] border-[#949494] rounded-[50px] opacity-[0.6]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
            }}
          ></div>
          <div className="xl:mt-[14px] mt-[10px] flex justify-center items-center">
            <div className="font-[700] 2xl:text-[40px] xl:text-[32px] text-[22px] text-textwhite text-center z-10">
              VIDEO TITLE
            </div>
          </div>
          <div className="mt-[8px] w-full border-[1px]  border-[#5E5E5E] z-10"></div>
          <div className="2xl:h-[200px] xl:h-[200px] lg:h-[200px] h-[250px] flex mx-[13px] mt-[7px] relative p-[12px]">
            <div className="absolute w-full h-full top-0 left-0 rounded-[20px] border-[2px] border-borderwhite bg-formback blur-[2px]"></div>
            <div className="font-[700] 2xl:text-[20px] xl:text-[16px] text-[12px] text-textwhite z-20">
              Video description comes here.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="mt-[10px] text-center font-Inter font-[700] 2xl:text-[40px] xl:text-[32px] text-[26px] text-textwhite z-10">
              TAGS:
            </div>
            <div className="flex justify-center items-center lg:gap-[45px] md:gap-[30px] gap-[20px] mt-[20px] lg:mb-0 mb-[20px]">
              <div className="2xl:w-[121px] xl:w-[100px] w-[60px] 2xl:h-[64px] xl:h-[50px] h-[40px] flex justify-center items-center relative p-[12px] cursor-pointer">
                <div className="absolute w-full h-full top-0 left-0 2xl:rounded-[20px] xl:rounded-[14px] rounded-[12px] border-[2px] border-borderwhite bg-formback blur-[2px]"></div>
                <div className="font-[700] 2xl:text-[20px] xl:text-[16px] text-[12px] text-textwhite z-20">
                  COMEDY
                </div>
              </div>
              <div className="2xl:w-[121px] xl:w-[100px] w-[60px] 2xl:h-[64px] xl:h-[50px] h-[40px] flex justify-center items-center relative p-[12px] cursor-pointer">
                <div className="absolute w-full h-full top-0 left-0 2xl:rounded-[20px] xl:rounded-[14px] rounded-[12px] border-[2px] border-borderwhite bg-formback blur-[2px]"></div>
                <div className="font-[700] 2xl:text-[20px] xl:text-[16px] text-[12px] text-textwhite z-20">
                  NFTs
                </div>
              </div>
              <div className="2xl:w-[121px] xl:w-[100px] w-[60px] 2xl:h-[64px] xl:h-[50px] h-[40px] flex justify-center items-center relative p-[12px] cursor-pointer">
                <div className="absolute w-full h-full top-0 left-0 2xl:rounded-[20px] xl:rounded-[14px] rounded-[12px] border-[2px] border-borderwhite bg-formback blur-[2px]"></div>
                <div className="font-[700] 2xl:text-[20px] xl:text-[16px] text-[12px] text-textwhite z-20">
                  WEB3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default HomePage;
