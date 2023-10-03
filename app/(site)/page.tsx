import Banner from "@/components/banner/page";
import Header from "../header/page";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <Achievement />
      {/* <IdealMatch /> */}
      <BridesandGroom />
    </>
  );
};

export default Page;

const Achievement: React.FC = () => {
  const achievements = [
    {
      img: "/trustedhome_icon.webp",
      desc: "10+ years of service in helping Yadavs cherish the meaning of Happy Marriage",
    },
    {
      img: "/ring_icon.webp",
      desc: "2 Lakh+ people have found their life partner using our services",
    },
    {
      img: "/denominationshome_icon.webp",
      desc: "2020's winner of 'India's Growth Champions Award' by The Economic Times",
    },
    {
      img: "/genuinehome_icon.webp",
      desc: "1 Lakh+ genuine profiles with 100% verified phone numbers",
    },
    {
      img: "/location_icon.webp",
      desc: "130+ branches across India to serve you better",
    },
  ];

  return (
    <div className="py-5 px-5 lg:px-0 max-w-7xl mx-auto">
      <p className="text-center text-3xl font-medium mb-6">Yadava Matrimony</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {achievements.map((achievement, index) => (
          <div className="col-span-1" key={index}>
            <img
              src={achievement?.img}
              className="mx-auto h-16"
              alt="trusted home"
            />
            <p className="text-center text-sm mt-3 font-light">
              {achievement?.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const IdealMatch = () => {
  return (
    <div className="bg-[#fef6f6]">
      <div className="max-w-7x mx-auto py-5 lg:px-0 px-5">
        <p className="text-center font-medium lg:text-2xl lg:tracking-wide">
          Begin Your Search for an Ideal Match
        </p>
      </div>
    </div>
  );
};

const BridesandGroom = () => {
  const users = [
    {
      img: "/user1.webp",
      name: "YDV950603",
      age: "30",
    },
    {
      img: "/user1.webp",
      name: "YDV950603",
      age: "23",
    },
    {
      img: "/user1.webp",
      name: "YDV950603",
      age: "33",
    },
    {
      img: "/user1.webp",
      name: "YDV950603",
      age: "27",
    },
    {
      img: "/user1.webp",
      name: "YDV950603",
      age: "24",
    },
  ];
  return (
    <div className="bg-[#fef6f6] p-5">
      <div className="max-w-5xl mx-auto px-5 lg:px-0">
        <p className="text-center font-medium lg:text-2xl lg:tracking-wide mb-7">
          Yadav <span className="text-blue-700">Brides</span> & &nbsp;
          <span className="text-blue-700">Grooms</span>
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5">
          {users.map((user, index) => (
            <div className="col-span-1" key={index}>
              <img
                src={user?.img}
                className="mx-auto h-40 rounded-full"
                alt="trusted home"
              />
              <p className="text-center font-medium text-sm mt-3">
                {user?.name}
              </p>
              <p className="text-center text-sm">{user?.age} yrs</p>
            </div>
          ))}
        </div>
        <p className="text-center font-medium lg:text-2xl lg:tracking-wide mt-7">
          Be a Prospective Match
        </p>
        <div className="flex justify-center">
          <Link href={"/"} className="bg-blue-700 px-5 py-2 rounded-full text-white">
            Register Free
          </Link>
        </div>
      </div>
    </div>
  );
};
