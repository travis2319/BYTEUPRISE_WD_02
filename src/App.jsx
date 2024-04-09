import "./App.css";
import {
  Navbar,
  Hero,
  FeatureSection,
  Workflow,
  Pricing,
  Testimonials,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
