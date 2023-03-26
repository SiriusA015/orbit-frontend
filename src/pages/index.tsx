import MainLayout from "../layouts/MainLayout";
import { MediaPost } from "../contents/Home/MediaPost";
import { UserVideo } from "../contents/Home/UserVideo";
import { VideoInfo } from "../contents/Home/VideoInfo";

const HomePage = () => {
  return (
    <>
      <div className="lg:grid grid-cols-3 w-full h-full 2xl:px-[83px] xl:px-[70px] lg:px-[50px] px-[30px]">
        <div className="col-span-1 2xl:mt-[96px] xl:mt-[110px] lg:mt-[130px] mt-[70px] 2xl:mb-[60px] xl:mb-[90px] mb-[130px] relative lg:py-0 py-[30px]">
          <MediaPost />
        </div>
        <div className="col-span-1 2xl:mx-[118px] xl:mx-[60px] lg:mx-[50px] mx-[20px] flex flex-col justify-center items-center">
          <UserVideo />
        </div>
        <div className="col-span-1 relative 2xl:my-[131px] xl:my-[100px] lg:my-[180px] my-[70px] lg:py-0 py-[30px]">
          <VideoInfo />
        </div>
      </div>
    </>
  );
};

HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default HomePage;
