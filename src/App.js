import MobileHomePage from "./pages/MobileHomePage"
import DesktopHomePage from "./pages/DesktopHomePage"
import './App.css'
import {useWindowWidth} from "./hooks/useWindowWidth";

function App() {
  const isMobile = useWindowWidth()
  console.log(isMobile)

  return (
    <div className="App">

      {isMobile ? <MobileHomePage/> : <DesktopHomePage/>}

    </div>
  );
}

export default App;
