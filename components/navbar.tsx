import { MobileSidebar } from "./mobile-sidebar";
import { ProfilSheet } from "./profil-sheet";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4 ">
      <MobileSidebar />
      <div className="flex justify-end w-full">
        <ProfilSheet />
      </div>
    </div>
  );
};

export default Navbar;
