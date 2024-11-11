import MobileHomePage from "./pages/MobileHomePage"
import DesktopHomePage from "./pages/DesktopHomePage/DesktopHomePage"
import './App.css'
import {useWindowWidth} from "./hooks/useWindowWidth";

function App() {
  const isMobile = useWindowWidth()

  return (
    <div className="App">

      {isMobile ? <MobileHomePage/> : <DesktopHomePage/>}

    </div>
  );
}

export default App;
