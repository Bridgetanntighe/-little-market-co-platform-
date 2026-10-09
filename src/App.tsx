import { Fragment } from "react";
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
        {seoPages.map((page) => {
          const bare = page.path.replace(/\/$/, "");
          return (
            <Fragment key={page.slug}>
              <Route path={bare} element={<Navigate to={page.path} replace />} />
              <Route path={page.path} element={<SeoLandingPage page={page} />} />
            </Fragment>
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
