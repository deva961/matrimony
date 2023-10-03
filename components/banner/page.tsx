import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src="./home_yadav_bg.webp"
        className="w-full h-[900px] object-cover"
        alt=""
      />
      <div className="absolute bg-black max-w-5xl mx-auto bg-opacity-75 p-10">
        <p className="text-white lg:text-3xl">
          No. 1 and official matrimony service exclusively for Yadavs.
        </p>
        <p className="text-white lg:text-lg tracking-wide">
          Meet your soulmate here!
        </p>

        <form className="grid grid-cols-4 my-5 bg-white rounded overflow-hidden">
          <div className="col-span-1 py-3 px-2 border-r">
            <label htmlFor="" className="text-sm ml-2.5">
              Matrimony Profile For
            </label>
            <Select>
              <SelectTrigger className="w-full border-none">
                <SelectValue placeholder="Select Profile" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="myself">Myself</SelectItem>
                <SelectItem value="daughter">Daughter</SelectItem>
                <SelectItem value="son">Son</SelectItem>
                <SelectItem value="sister">Sister</SelectItem>
                <SelectItem value="brother">Brother</SelectItem>
                <SelectItem value="relative">Relative</SelectItem>
                <SelectItem value="friend">Friend</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-1 py-3 px-2 border-r">
            <label htmlFor="" className="text-sm ml-2.5">
              Name
            </label>
            <Input
              className="border-none focus:outline-none focus:border-none"
              type="text"
              placeholder="Enter Name"
            />
          </div>

          <div className="col-span-1 py-3 px-2 border-r">
            <label htmlFor="" className="text-sm ml-2.5">
              Mobile Number
            </label>
            <Input
              className="border-none focus:outline-none focus:border-none"
              type="text"
              placeholder="Enter Mobile Number"
            />
          </div>

          <div className="col-span-1 py-3 px-2 ">
            <Button className="w-full h-full bg-blue-700">Register Free</Button>
          </div>
        </form>

        <p className="text-xs text-white"></p>
      </div>
    </div>
  );
};

export default Banner;
