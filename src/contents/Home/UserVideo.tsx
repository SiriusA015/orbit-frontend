import { useState } from "react";
import { IUser } from "../../types";
import Image from "next/image";

export const UserVideo = () => {
  const [user, setUser] = useState<IUser>({
    name: "Kalle",
    email: "kalle@orbit.com",
  });
  return (
    <>
      <Image
        alt="up"
        src="/static/images/icons/up.png"
        className="mx-auto 2xl:w-[80px] xl:w-[70px] w-[60px] 2xl:h-[80px] xl:h-[70px] h-[60px] cursor-pointer"
        width={80}
        height={80}
      />
      <div className="relative w-full 2xl:h-[557px] xl:h-[520px] lg:h-[400px] h-[370px]">
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
            className="2xl:w-[55px] xl:w-[46px] w-[40px] 2xl:h-[55px] xl:h-[46px] h-[40px] z-10"
            width={55}
            height={55}
          />
          <div className="font-Inter font-[600] 2xl:text-[28px] xl:text-[22px] text-[18px] text-textwhite ml-[5px] z-10">
            {user.name}
          </div>
        </div>
        <div className="mt-[8px] w-full border-[1px] border-[#C5C5C5] z-10"></div>
        <div
          className="mx-[13px] mt-[13px] relative"
          style={{ height: "calc(100% - 110px)" }}
        >
          <div className="absolute w-full h-full top-0 left-0 rounded-[20px] bg-formback z-100 blur-[3px]"></div>
        </div>
      </div>
      <Image
        alt="down"
        src="/static/images/icons/down.png"
        className="mx-auto 2xl:w-[80px] xl:w-[70px] w-[60px] 2xl:h-[80px] xl:h-[70px] h-[60px] cursor-pointer"
        width={80}
        height={80}
      />
    </>
  );
};
