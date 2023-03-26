import Image from "next/image";

export const Search = () => {
  return (
    <>
      <div className="2xl:w-[448px] xl:w-[320px] lg:w-[300px] w-[80%] mx-auto 2xl:h-[50px] xl:h-[44px] lg:h-[40px] h-[50px] relative mt-[58px]">
        <input
          type="text"
          placeholder="Search Orbit"
          className="placeholder:text-placehd w-full h-full bg-formback rounded-[20px] border-[1px] border-borderwhite text-textwhite pl-[55px]"
        />
        <div className="absolute my-auto top-0 bottom-0 flex items-center pl-[17px]">
          <Image
            alt="search"
            src="/static/images/icons/search.png"
            className="2xl:w-[33px] xl:w-[28px] w-[24px] 2xl:h-[33px] xl:h-[28px] h-[24px]"
            width={33}
            height={32}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:mb-0 mb-[20px]">
        <div className="col-span-1">
          <div className="relative 2xl:w-[185px] xl:w-[150px] w-[120px] 2xl:h-[184px] xl:h-[150px] h-[120px] flex justify-center items-center lg:mt-[67px] mt-[30px] lg:ml-0 md:ml-[130px] sm:ml-[90px] ml-[60px]">
            <div className="absolute top-0 left-0 w-full h-full rounded-[90px] bg-formback border-[1px] border-borderwhite blur-[2px]"></div>
            <div
              className="font-[600] 2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[22px] text-[18px] z-10"
              style={{ color: "rgba(244, 244, 244, 0.8)" }}
            >
              #Crypto
            </div>
          </div>
          <div className="relative 2xl:w-[185px] xl:w-[150px] w-[120px] 2xl:h-[184px] xl:h-[150px] h-[120px] flex justify-center items-center 2xl:ml-[45px] xl:ml-[33px] lg:ml-[22px] md:ml-[150px] sm:ml-[110px] ml-[80px] mt-[30px]">
            <div className="absolute top-0 left-0 w-full h-full rounded-[90px] bg-formback border-[1px] border-borderwhite blur-[2px]"></div>
            <div
              className="font-[600] xl:text-[28px] lg:text-[26px] md:text-[22px] text-[18px] z-10"
              style={{ color: "rgba(244, 244, 244, 0.8)" }}
            >
              #Mint
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative 2xl:w-[185px] xl:w-[150px] w-[120px] 2xl:h-[184px] xl:h-[150px] h-[120px] flex justify-center items-center lg:mt-[127px] mt-[80px]">
            <div className="absolute top-0 left-0 w-full h-full rounded-[90px] bg-formback border-[1px] border-borderwhite blur-[2px]"></div>
            <div
              className="font-[600] xl:text-[28px] lg:text-[26px] md:text-[22px] text-[18px] z-10"
              style={{ color: "rgba(244, 244, 244, 0.8)" }}
            >
              #NFT
            </div>
          </div>
          <div className="relative 2xl:w-[185px] xl:w-[150px] w-[120px] 2xl:h-[184px] xl:h-[150px] h-[120px] flex justify-center items-center lg:mt-[105px] mt-[80px]">
            <div className="absolute top-0 left-0 w-full h-full rounded-[90px] bg-formback border-[1px] border-borderwhite blur-[2px]"></div>
            <div
              className="font-[600] xl:text-[28px] lg:text-[26px] md:text-[22px] text-[18px] z-10"
              style={{ color: "rgba(244, 244, 244, 0.8)" }}
            >
              #Market
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
