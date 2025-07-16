import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import MissionComponent from "@/components/Mission";

const Mission = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <MissionComponent />
      <Footer />
    </div>
  );
};

export default Mission;