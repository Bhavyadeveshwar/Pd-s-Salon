import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const Shop = lazy(()=> import('./components/Shop/Shop'));
const Home = lazy(()=> import('./components/Home'));
const Catalogue= lazy(()=>import('./components/Catalogue/Catalogue'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Catalogue" element={<Catalogue/>}/> 
        <Route path="/Shop" element={<Shop />} />

      </Routes>
      </Suspense>
    </>
  );
}

export default App;