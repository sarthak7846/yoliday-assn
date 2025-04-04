import { BottomNavbar } from "./components/BottomNavbar";
import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Toaster } from "./components/ui/sonner";
import userAvatar from "./icons/user.png";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col ">
        <Topbar name="Lorem Ips" role="Manager" profileImg={userAvatar} />
        <div className="md:flex flex-1 md:bg-[#F5F4F4]">
          <Sidebar />
          <MainContent />
        </div>
      </div>
      <BottomNavbar />
      <Toaster />
    </>
  );
}

export default App;
