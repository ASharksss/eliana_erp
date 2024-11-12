import MobileHomePage from "./pages/MobileHomePage/MobileHomePage"
import DesktopHomePage from "./pages/DesktopHomePage/DesktopHomePage"
import './App.css'
import {useWindowWidth} from "./hooks/useWindowWidth";
import Layout from "./Layout/Layout";
import {Routes, BrowserRouter, Route} from "react-router-dom";

function App() {
  const isMobile = useWindowWidth()


  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route path={"/"} element={isMobile ? <MobileHomePage/> : <DesktopHomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
