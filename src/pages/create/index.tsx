import MainLayout from "../../layouts/MainLayout";
import Image from "next/image";

const CreatePage = () => {
  return (
    <>
      <div className="lg:grid grid-cols-3 w-full h-full">
        <div className="col-span-1 2xl:mx-[60px] xl:mx-[40px] mx-[30px] flex flex-col justify-center items-center lg:mt-[0] mt-[50px]">
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
                  className="z-10 ml-[12px] 2xl:w-[40px] xl:w-[30px] w-[28px] 2xl:h-[40px] xl:h-[30px] h-[28px]"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex justify-center items-center rounded-[12px] 2xl:w-[100px] w-[80px] 2xl:h-[40px] h-[28px] bg-formback border-[2px] border-borderwhite z-10 text-textwhite font-[700] 2xl:text-[20px] xl:text-[18px] text-[14px]">
                POST
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-between py-[30px] lg:mt-0 mt-[50px]">
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
        </div>
        <div className="col-span-1 2xl:pl-[120px] xl:pl-[80px] pl-[40px]">
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
        </div>
      </div>
    </>
  );
};

CreatePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default CreatePage;
