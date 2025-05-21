import { Outlet } from "react-router-dom";
import ClientFooter from "./ClientFooter";
import ClientHeader from "./ClientHeader";

const ClientLayout = () => {
  return (
    <>
      <ClientHeader />
      <div className="w-[1500px] m-auto">
        <Outlet />
      </div>
      <ClientFooter />
    </>
  );
};

export default ClientLayout;
