import HeroPage from "../components/HeroPage";
import OngoingExhibitions from "../sections/OngoingExhibitions";
import ExploreSection from "../sections/ExploreSection";
import GlobalPresence from "../sections/GlobalPresence";
import FeaturedExhibitions from "../sections/FeaturedExhibitions";
import Participants from "../sections/Participants";
import Footer from "../sections/Footer";
function HomePage({ currentPage, onNavigate, onOpenAuth }) {
  return (
    <>
      <HeroPage
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenAuth={onOpenAuth}
      />

      <OngoingExhibitions />
      <ExploreSection />
     <FeaturedExhibitions />
        <GlobalPresence />
      <Participants />
        <Footer />
    </>
  );
}

export default HomePage;