import ButtonImage from "component/Button/ButtonImage";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="2xl:h-[120px] h-[90px] flex justify-center items-center relative 2xl:gap-[115px] xl:gap-[90px] lg:gap-[70px] md:gap-[60px] gap-[40px]">
        <ButtonImage
          sizeClass="2xl:w-[76px] w-[50px] 2xl:h-[76px] h-[50px]"
          className="hover:scale-[1.02]"
        >
          <Image
            alt="items"
            src="/static/images/icons/items.png"
            className="w-full h-full"
            width={76}
            height={76}
          />
        </ButtonImage>
        <ButtonImage
          sizeClass="2xl:w-[76px] w-[50px] 2xl:h-[76px] h-[50px]"
          className="hover:scale-[1.02]"
        >
          <Image
            alt="camera"
            src="/static/images/icons/camera.png"
            className="w-full h-full"
            width={76}
            height={76}
          />
        </ButtonImage>
        <ButtonImage
          sizeClass="2xl:w-[76px] w-[50px] 2xl:h-[76px] h-[50px]"
          className="hover:scale-[1.02]"
        >
          <Image
            alt="msg"
            src="/static/images/icons/msg.png"
            className="w-full h-full"
            width={76}
            height={76}
          />
        </ButtonImage>
        <div className="absolute w-screen top-0 left-0 border-[1px] border-[#CCCCCC]"></div>
      </div>
    </>
  );
}
export default Footer;
