import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";
import Body from "./components/Body";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidenav/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
