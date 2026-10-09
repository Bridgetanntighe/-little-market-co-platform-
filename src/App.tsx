import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { Layout } from "./components/Layout";
import CelebrationsPage from "./pages/CelebrationsPage";
import CorporatePage from "./pages/CorporatePage";
import EnquirePage from "./pages/EnquirePage";
import HomePage from "./pages/HomePage";
import PackagesPage from "./pages/PackagesPage";
import PartnerPage from "./pages/PartnerPage";
import PrivacyPage from "./pages/PrivacyPage";
import WeddingPage from "./pages/WeddingPage";
import "./styles/global.css";
import "./styles/sections.css";

/** Keep route changes at the top so enquire CTAs never land mid-page. */
function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

function SlashRedirect({ to }: { to: string }) {
  return <Navigate to={to} replace />;
}

function HashRedirect({ to }: { to: string }) {
  const location = useLocation();
  const target = `${to}${location.search}${location.hash}`;
  return <Navigate to={target} replace />;
}

function LegacyHomeHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#packages") {
      window.location.replace("/packages/");
    } else if (location.hash === "#enquire") {
      window.location.replace("/enquire/");
    }
  }, [location.hash]);
  return <HomePage />;
}

function routePair(bare: string, element: ReactNode) {
  return [
    <Route key={`${bare}-bare`} path={bare} element={<SlashRedirect to={`${bare}/`} />} />,
    <Route key={`${bare}-slash`} path={`${bare}/`} element={element} />,
  ];
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LegacyHomeHash />} />
        {routePair("/wedding-flower-bar-hire-london", <WeddingPage />)}
        {routePair("/celebrations", <CelebrationsPage />)}
        {routePair("/packages", <PackagesPage />)}
        {routePair("/enquire", <EnquirePage />)}
        {routePair("/corporate-flower-bar-london", <CorporatePage />)}
        {routePair("/partner-with-us", <PartnerPage />)}
        {routePair("/privacy", <PrivacyPage />)}
        {/* Retired SEO landers → primary pages */}
        <Route
          path="/flower-bar-hire-london"
          element={<SlashRedirect to="/flower-bar-hire-london/" />}
        />
        <Route path="/flower-bar-hire-london/" element={<Navigate to="/" replace />} />
        <Route
          path="/brand-activation-flower-bar"
          element={<SlashRedirect to="/brand-activation-flower-bar/" />}
        />
        <Route
          path="/brand-activation-flower-bar/"
          element={<HashRedirect to="/corporate-flower-bar-london/" />}
        />
        <Route
          path="/christmas-flower-bar-london"
          element={<SlashRedirect to="/christmas-flower-bar-london/" />}
        />
        <Route
          path="/christmas-flower-bar-london/"
          element={<Navigate to="/celebrations/" replace />}
        />
        <Route
          path="/flower-workshop-london"
          element={<SlashRedirect to="/flower-workshop-london/" />}
        />
        <Route path="/flower-workshop-london/" element={<Navigate to="/packages/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
