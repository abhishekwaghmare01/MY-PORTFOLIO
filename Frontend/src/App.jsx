import Layout from "./components/Layouts/Layout.jsx";
import About from "./pages/About/About.jsx";
import Techstack from "./pages/TechStack/Techstack.jsx";

export default function App(){
  return(
    <>
      <Layout/>
      <div className="container">
      <About/>
      <Techstack/>
      </div>
    </>
  )
}
