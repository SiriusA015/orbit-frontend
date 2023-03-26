export const VideoInfo = () => {
  return (
    <>
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
    </>
  );
};
