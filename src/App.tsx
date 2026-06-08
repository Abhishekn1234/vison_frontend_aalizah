import "./App.css";
import Layout from "./components/Layout/Layout";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutPage from "./pages/About/AboutPage";
import FaqPage from "./pages/Faq/FaqPage";
import TeamPage from "./pages/Team/TeamPage";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import ProjectPage from "./pages/Projects/ProjectPage";
import NewsPage from "./pages/News/NewsPage";
import ContactPage from "./pages/Contact/ContactPage";


export default function App() {
  return (
     <Layout>
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
      
      </Layout>
      
     
     

  );
}