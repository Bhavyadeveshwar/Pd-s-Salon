import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Shop = lazy(() => import('./components/Shop/Shop'));
const Home = lazy(() => import('./components/Home'));
const Catalogue = lazy(() => import('./components/Catalogue/Catalogue'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Catalogue" element={<Catalogue />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
