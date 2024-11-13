import MobileHomePage from "./pages/MobileHomePage/MobileHomePage"
import DesktopHomePage from "./pages/DesktopHomePage/DesktopHomePage"
import './App.css'
import {useWindowWidth} from "./hooks/useWindowWidth";
import Layout from "./Layout/Layout";
import {Routes, BrowserRouter, Route} from "react-router-dom";
import SupplyListPage from "./pages/SupplyListPage/SupplyListPage";
import DetailPage from "./pages/DetailPage/Detail.Page";

function App() {
  const isMobile = useWindowWidth()


  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>
            <Route path={"/"} element={isMobile ? <MobileHomePage/> : <DesktopHomePage/>}/>
            <Route path={"/orders"} element={<SupplyListPage/>}/>
            <Route path={"/shipment"} element={<SupplyListPage/>}/>
            <Route path={"/supplies"} element={<SupplyListPage/>}/>
            <Route path={"/orders/1"} element={<DetailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
