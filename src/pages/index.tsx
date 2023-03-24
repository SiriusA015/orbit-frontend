import MainLayout from "../layouts/MainLayout";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full gap-[100px]">
        <div className="border-[2px] border-[#949494] rounded-[50px] w-[25%] h-[62%] mt-[20px]"></div>
        <div>
          <div className="border-[2px] border-[#949494] rounded-[50px] w-[17%] h-[59%]"></div>
        </div>
        <div className="border-[2px] border-[#949494] rounded-[50px] w-[25%] h-[52%]"></div>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default HomePage;
