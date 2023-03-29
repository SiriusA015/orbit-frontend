import { useRouter } from "next/router";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export const MediaPost = () => {
  const router = useRouter();
  const onPost = () => {
    router.push("/post");
  };

  return (
    <>
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
          <ButtonPrimary
            sizeClass="2xl:w-[145px] xl:w-[120px] w-[96px] 2xl:h-[43px] xl:h-[38px] h-[30px]"
            fontSize="font-Inter font-[600] 2xl:text-[14px] text-[12px]"
            className="rounded-[20px] z-10"
          >
            BROWSE FILES
          </ButtonPrimary>
        </div>
        <ButtonPrimary
          sizeClass="2xl:top-[170px] top-[190px] 2xl:right-[18px] right-[2px] 2xl:w-[100px] xl:w-[100px] w-[100px] 2xl:h-[60px] h-[40px]"
          fontSize="2xl:text-[16px] xl:text-[14px] text-[14px] font-[600]"
          className="xl:absolute mx-auto rounded-[20px] z-10"
        >
          ADD TAG(S)
        </ButtonPrimary>
        <div className="relative w-full h-[220px] rounded-[20px] flex flex-col items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-formback rounded-[20px] blur-[3px]"></div>
          <div className="font-Inter font-[600] text-[#F4F4F4] 2xl:text-[28px] xl:text-[24px] text-[18px] z-10">
            DESCRIPTION:
          </div>
          <div
            className="relative w-[80%] 2xl:h-[170px] xl:h-[140px] h-[100px] 2xl:mb-[15px] mb-[7px]"
            style={{
              height: "calc(100% - 40px)",
            }}
          >
            <textarea className="absolute top-0 left-0 w-full h-full p-[10px] bg-transparent rounded-[20px] z-10 resize-none text-[#000000] font-[600] 2xl:text-[20px] xl:text-[16px] text-[12px] overflow-hidden" />
            <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-[#BFBFBF] blur-[2px] z-1"></div>
          </div>
        </div>
        <ButtonPrimary
          sizeClass="2xl:w-[100px] xl:w-[80px] w-[70px] 2xl:h-[40px] xl:h-[35px] h-[30px]"
          fontSize="font-Inter font-[600] text-textwhite 2xl:text-[18px] xl:text-[16px] text-[12px]"
          className="mx-auto rounded-[13px]"
          onClick={onPost}
        >
          POST
        </ButtonPrimary>
      </div>
    </>
  );
};
