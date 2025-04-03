import { MainContent } from "./components/MainContent";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import userAvatar from "./icons/user.png";

function App() {
  return (
    <div className="h-screen flex flex-col ">
      <Topbar name="Lorem Ips" role="Manager" profileImg={userAvatar} />
      <div className="flex flex-1 bg-[#F5F4F4]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
