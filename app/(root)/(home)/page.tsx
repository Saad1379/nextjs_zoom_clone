import DashboardBanner from "@/components/DashboardBanner";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <DashboardBanner />
      <MeetingTypeList />
    </section>
  );
};

export default Home;
