import Layout from "./components/Layouts/Layout.jsx";
import About from "./pages/About/About.jsx";
import Project from "./pages/Projects/Project.jsx";
import Techstack from "./pages/TechStack/Techstack.jsx";
import Education from "./pages/Eduction/Education.jsx";
import Internship from "./pages/Internships/Internship.jsx";
import Contact from "./pages/Contact/Contact.jsx";


export default function App(){
  return(
    <>
      <Layout/>
      <div className="container">
      <About/>
      <Techstack/>
      <Project/>
      <Education/>
      <Internship/>
      <Contact/>
     
      </div>
    </>
  )
}
