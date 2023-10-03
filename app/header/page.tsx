import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex items-center justify-between">
          <div className="block">
            <p className="font-medium text-lg">Sri Krisna Satya Vamsee</p>
            <p className="font-thin text-sm">Yadavas Matrimony</p>
          </div>

          <div className="flex items-center space-x-3">
            <p>Already a member?</p>
            <Link
              href="#"
              className="border border-gray-400 bg-blue-600 text-white px-3.5 py-1 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
