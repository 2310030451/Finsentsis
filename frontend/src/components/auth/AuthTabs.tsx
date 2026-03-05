import googleIcon from "../../assets/icons/google.png";
import microsoftIcon from "../../assets/icons/microsoft.png";
import appleIcon from "../../assets/icons/apple.png";

const AuthTabs = () => {
  return (
    <div className="flex justify-center gap-4 mb-6">

      <button className="w-[60px] h-[52px] bg-[#111] rounded-2xl flex items-center justify-center cursor-pointer">
        <img src={googleIcon} alt="Google" className="w-[50px] h-[50px] object-contain" />
      </button>

      <button className="w-[60px] h-[52px] bg-[#111] rounded-2xl flex items-center justify-center cursor-pointer">
        <img src={microsoftIcon} alt="Microsoft" className="w-7 h-7 object-contain" />
      </button>

      <button className="w-[60px] h-[52px] bg-[#111] rounded-2xl flex items-center justify-center cursor-pointer">
        <img src={appleIcon} alt="Apple" className="w-7 h-7 object-contain" />
      </button>

    </div>
  );
};

export default AuthTabs;
