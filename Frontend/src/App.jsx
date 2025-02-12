import Layout from "./components/Layouts/Layout.jsx";
import About from "./pages/About/About.jsx";
import Project from "./pages/Projects/Project.jsx";
import Techstack from "./pages/TechStack/Techstack.jsx";
import Education from "./pages/Eduction/Education.jsx";
import Internship from "./pages/Internships/Internship.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.jsx";
import MobileNav from "./components/mobileNav/mobileNav.jsx";

export default function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Techstack />
          <Project />
          <Education />
          <Internship />
          <Contact />
          <Footer />
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "rgb(31, 30, 26)", borderRadius: "80px" }}
      />
    </>
  );
}
