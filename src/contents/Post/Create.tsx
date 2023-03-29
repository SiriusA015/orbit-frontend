import ButtonPrimary from "shared/Button/ButtonPrimary";
import Image from "next/image";

export const Create = () => {
  return (
    <>
      <div className="relative w-full 2xl:h-[500px] lg:h-[420px] h-[390px]">
        <div
          className="absolute w-full h-full top-0 left-0 opacity-[0.6] border-[2px] border-[#949494] rounded-[50px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(201, 201, 201, 0.9) 0%, #595959 100%)",
          }}
        ></div>
        <div className="flex flex-row justify-center">
          <div className="mt-[10px] font-Inter font-[600] 2xl:text-[28px] xl:text-[22px] text-[18px] text-textwhite ml-[5px] z-10">
            CREATE A POST
          </div>
        </div>
        <div className="mt-[8px] w-full border-[1px] border-[#C5C5C5] z-10"></div>
        <div className="relative 2xl:h-[350px] xl:h-[320px] h-[260px] 2xl:mx-[26px] xl:mx-[22px] mx-[16px] 2xl:mt-[20px] xl:mt-[16px] mt-[12px] 2xl:rounded-[20px] rounded-[14px]">
          <textarea
            placeholder="What’s on your mind..."
            className=" placeholder:text-placehd w-full h-full rounded-[20px] bg-transparent p-[20px] font-[700] 2xl:text-[28px] xl:text-[24px] text-[20px] text-white absolute top-0 left-0 z-10 overflow-hidden resize-none"
            style={{ textOverflow: "ellipsis" }}
          />
          <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-formback blur-[3px] z-1"></div>
        </div>
        <div className="flex justify-between px-[30px] mt-[13px]">
          <div className="flex">
            <Image
              alt="imgview"
              src="/static/images/icons/imgview.png"
              className="z-10 ml-[12px] 2xl:w-[40px] xl:w-[30px] w-[28px] 2xl:h-[40px] xl:h-[30px] h-[28px] cursor-pointer"
              width={40}
              height={40}
            />
          </div>
          <ButtonPrimary
            sizeClass="2xl:w-[100px] w-[80px] 2xl:h-[40px] h-[28px]"
            fontSize="font-[700] 2xl:text-[20px] xl:text-[18px] text-[14px]"
            className="rounded-[12px] z-10"
          >
            POST
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};
