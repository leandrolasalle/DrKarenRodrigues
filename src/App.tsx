import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import JourneyLandingPage from './components/JourneyLandingPage';
import QuickContactSection from './components/QuickContactSection';
import Footer from './components/Footer';
import DeadlinesModal from './components/DeadlinesModal';
import PreAssessmentModal from './components/PreAssessmentModal';
import ShareUrlModal from './components/ShareUrlModal';
import { useSiteController } from './controllers/useSiteController';

export default function App() {
  const site = useSiteController();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] flex flex-col font-sans selection:bg-[#5B1422] selection:text-white">
      {/* Floating Pill Navbar */}
      <Header
        currentPage={site.currentPage}
        onNavigatePage={site.navigatePage}
        onOpenCalculator={site.openCalculator}
        onOpenConsultation={site.openConsultation}
        onOpenShareUrl={site.openShareUrl}
      />

      {/* Main Content: Either Home or Dedicated "Sobre Mim · Minha Jornada" (Hero's Journey) Landing Page */}
      <main className="flex-grow">
        {site.currentPage === 'sobre' ? (
          <JourneyLandingPage
            onBackToHome={() => site.navigatePage('home')}
            onOpenConsultation={site.openConsultation}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero
              onOpenConsultation={() => site.openConsultation()}
              onOpenJourneyPage={() => site.navigatePage('sobre')}
            />

            {/* 6 Direct Services in Rounded Cards */}
            <ServicesSection onSelectService={site.openConsultation} />

            {/* 3 Steps: How It Works */}
            <HowItWorks />

            {/* Teaser Card on Home to Open Dedicated "Sobre Mim · Minha Jornada" Landing Page */}
            <AboutSection onOpenJourneyPage={() => site.navigatePage('sobre')} />

            {/* Interactive Client Triage & Offices */}
            <QuickContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigatePage={site.navigatePage}
        onOpenCalculator={site.openCalculator}
        onOpenShareUrl={site.openShareUrl}
      />

      {/* Calculator Modal */}
      <DeadlinesModal
        isOpen={site.calculatorOpen}
        onClose={site.closeCalculator}
      />

      {/* Pre-Assessment / Client Triage Modal */}
      <PreAssessmentModal
        isOpen={site.consultationOpen}
        onClose={site.closeConsultation}
        defaultSubject={site.selectedSubject}
      />

      {/* Public URL & Social Share Modal */}
      <ShareUrlModal
        isOpen={site.shareUrlOpen}
        onClose={site.closeShareUrl}
      />

    </div>
  );
}
