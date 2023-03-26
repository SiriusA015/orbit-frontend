import Image from "next/image";

export const PostView = () => {
  return (
    <>
      <div className="relative 2xl:h-[160px] xl:h-[160px] lg:h-[160px] h-[240px] 2xl:mx-[30px] xl:mx-[24px] lg:mx-[16px] mx-[30px]">
        <div
          className="absolute w-full h-full top-0 left-0 border-[2px] border-[#949494] 2xl:rounded-[50px] xl:rounded-[40px] rounded-[30px] opacity-[0.6]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
          }}
        ></div>
        <div className="2xl:h-[110px] xl:h-[100px] lg:h-[90px] h-[140px] flex 2xl:mx-[33px] mx-[26px] 2xl:mt-[40px] lg:mt-[30px] mt-[70px] relative p-[12px] blur-[2px]">
          <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-formback1 blur-[2px]"></div>
          <div className="font-[700] 2xl:text-[20px] xl:text-[16px] text-[12px] text-textwhite">
            Post content blurred.
          </div>
        </div>
      </div>
      <div className="relative 2xl:h-[266px] xl:h-[250px] lg:h-[230px] md:h-[280px] h-[250px] lg:mt-0 mt-[30px] lg:mb-0 mb-[30px] lg:mx-0 mx-[30px]">
        <div
          className="absolute w-full h-full top-0 left-0 opacity-[0.6] border-[2px] border-[#949494] rounded-[50px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
          }}
        ></div>
        <div className="flex flex-row pt-[14px] pl-[30px] items-center">
          <Image
            alt="avatar"
            src="/static/images/user/user1.png"
            className="z-10 2xl:w-[44px] xl:w-[38px] w-[32px] 2xl:h-[44px] xl:h-[38px] h-[32px]"
            width={44}
            height={44}
          />
          <div className="font-Inter font-[600] 2xl:text-[28px] xl:text-[24px] text-[22px] text-textwhite ml-[5px] z-10">
            username
          </div>
          <div className="absolute right-0 flex">
            <div className="flex items-center">
              <Image
                alt="eye"
                src="/static/images/icons/eye.png"
                width={24}
                height={24}
              />
              <div
                className="ml-[7px] font-[600] 2xl:text-[20px] xl:text-[16px] text-[12px]"
                style={{ color: "rgba(244, 244, 244, 0.8)" }}
              >
                450
              </div>
            </div>
            <div className=" border-r-[2px] border-borderwhite mx-[10px]"></div>
            <div className="flex items-center mr-[25px]">
              <Image
                alt="clock"
                src="/static/images/icons/clock.png"
                width={24}
                height={24}
              />
              <div
                className="ml-[7px] font-[600] 2xl:text-[20px] xl:text-[16px] text-[12px]"
                style={{ color: "rgba(244, 244, 244, 0.8)" }}
              >
                2 min
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[8px] w-full border-[1px] border-[#C5C5C5] z-10"></div>
        <div
          className="mx-[13px] mt-[13px] p-[12px] relative"
          style={{ height: "calc(100% - 110px)" }}
        >
          <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-formback blur-[3px]"></div>
          <div className="flex ">
            <div className="font-[600] 2xl:text-[20px] xl:text-[18px] md:text-[16px] text-[15px] text-white z-10">
              Post content here.
            </div>
          </div>
        </div>
      </div>
      <div className="relative 2xl:h-[160px] xl:h-[160px] lg:h-[160px] h-[240px] 2xl:mx-[30px] xl:mx-[24px] lg:mx-[16px] mx-[30px]">
        <div
          className="absolute w-full h-full top-0 left-0 border-[2px] border-[#949494] 2xl:rounded-[50px] xl:rounded-[40px] rounded-[30px] opacity-[0.6]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
          }}
        ></div>
        <div className="2xl:h-[110px] xl:h-[100px] lg:h-[90px] h-[140px] flex 2xl:mx-[33px] mx-[26px] 2xl:mt-[40px] lg:mt-[30px] mt-[70px] relative p-[12px] blur-[2px]">
          <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-formback1 blur-[2px]"></div>
          <div className="font-[700] 2xl:text-[20px] xl:text-[16px] text-[12px] text-textwhite">
            Post content blurred.
          </div>
        </div>
      </div>
    </>
  );
};
