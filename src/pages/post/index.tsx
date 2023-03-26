import MainLayout from "../../layouts/MainLayout";
import { Create } from "../../contents/Post/Create";
import { PostView } from "../../contents/Post/PostView";
import { Search } from "../../contents/Post/Search";

const PostPage = () => {
  return (
    <>
      <div className="lg:grid grid-cols-3 w-full h-full">
        <div className="col-span-1 2xl:mx-[60px] xl:mx-[40px] mx-[30px] flex flex-col justify-center items-center lg:mt-[0] mt-[50px]">
          <Create />
        </div>
        <div className="col-span-1 flex flex-col justify-between py-[30px] lg:mt-0 mt-[50px]">
          <PostView />
        </div>
        <div className="col-span-1 2xl:pl-[120px] xl:pl-[80px] pl-[40px]">
          <Search />
        </div>
      </div>
    </>
  );
};

PostPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default PostPage;
