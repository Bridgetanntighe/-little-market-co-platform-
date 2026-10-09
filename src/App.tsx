import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { seoPages } from "./data/seoPages";
import HomePage from "./pages/HomePage";
import { SeoLandingPage } from "./pages/SeoLandingPage";
import "./styles/global.css";
import "./styles/sections.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {seoPages.map((page) => (
          <Route
            key={page.slug}
            path={page.path}
            element={<SeoLandingPage page={page} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
