import { MobileSidebar } from "./mobile-sidebar";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4 ">
      <MobileSidebar />
      <div className="flex justify-end w-full">
        <>Menu profil</>
      </div>
    </div>
  );
};

export default Navbar;
