import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
const Header = () => {
 return (
  <>
   <div className="lg:hidden">
    <HeaderMobile />
   </div>
   <div className="hidden lg:block">
    <HeaderDesktop />
   </div>
  </>
 );
};

export default Header;
