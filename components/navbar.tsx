import { MobileSidebar } from "./mobile-sidebar";
import NetworkBadge from "./network";
import { ProfilSheet } from "./profil-sheet";
import TxProcessing from "./tx-processing";

const Navbar = async () => {
  return (
    <div className="flex items-center p-4 ">
      <MobileSidebar />
      <div className="flex justify-end w-full space-x-4">
        <TxProcessing /> <NetworkBadge /> <ProfilSheet />
      </div>
    </div>
  );
};

export default Navbar;
