import { useEffect, useState } from 'react';
import type { ActivePage } from '../models/site';
import { syncSeoMetadata } from '../models/legalData';

export function useSiteController() {
  const [currentPage, setCurrentPage] = useState<ActivePage>(() => {
    if (
      typeof window !== 'undefined' &&
      (window.location.hash === '#sobre-mim' ||
        window.location.hash === '#minha-jornada')
    ) {
      return 'sobre';
    }
    return 'home';
  });
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [shareUrlOpen, setShareUrlOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>();

  useEffect(() => {
    syncSeoMetadata();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.hash === '#sobre-mim' ||
        window.location.hash === '#minha-jornada'
      ) {
        setCurrentPage('sobre');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigatePage = (page: ActivePage, sectionHash?: string) => {
    setCurrentPage(page);
    if (page === 'sobre') {
      window.history.replaceState(null, '', '#sobre-mim');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.replaceState(null, '', sectionHash || window.location.pathname);
    if (sectionHash) {
      window.setTimeout(() => {
        document.querySelector(sectionHash)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultation = (subject?: string) => {
    setSelectedSubject(subject);
    setConsultationOpen(true);
  };

  return {
    currentPage,
    calculatorOpen,
    consultationOpen,
    shareUrlOpen,
    selectedSubject,
    navigatePage,
    openCalculator: () => setCalculatorOpen(true),
    closeCalculator: () => setCalculatorOpen(false),
    openConsultation,
    closeConsultation: () => setConsultationOpen(false),
    openShareUrl: () => setShareUrlOpen(true),
    closeShareUrl: () => setShareUrlOpen(false),
  };
}
