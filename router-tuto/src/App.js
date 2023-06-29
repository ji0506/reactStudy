import { Route, Routes } from "react-router-dom";
import Home from "./page/Home.js";
import About from "./page/About.js";
import Profile from './page/Profile.js'
import Layout from "./page/Layout.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profiles/:username" element={<Profile></Profile>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
