//Import all dependencies, other Components
import Header from "./my-components/Header";//import Header Component
import Footer from "./my-components/Footer";//import Footer Component
import Home from "./my-components/Home";//import Home Component
import AdvancedJS from "./my-components/AdvancedJS"; //import AdvancedJS Component
import { BrowserRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from "./my-components/FAQ"; //import FAQ component
import Invoice from './my-components/Invoice'; //import Invoice Component

//Function Component "App"
function App() {
  //Component UI: HTML Rendering
  return (
    <> {/*React Fragment: serve as parent component in JSX and doesn't add anything to the DOM */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/advancedJS" element={<AdvancedJS />} />
        <Route path="/faq" element={<FAQ />}  />
        <Route path="/invoice" element={<Invoice />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default App;

// Don't need this anymore but I'm a hoarder
// <h1 className="bg-warning p-3 text-center">ITWD6.408: PROJECT 2</h1>