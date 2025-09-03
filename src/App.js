
import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Header/Nav";
import Mainbanner from "./components/Mainbanner/Mainbanner";
import Up from "./components/Up/Up";
import Setting from "./components/Setting/Setting";
import Say from "./components/Say/Say";
import Today from "./components/Today/Today";
import Card from "./components/Card/Card";
import Contents from "./components/Contents/Contents";
import Fenty from "./components/Fenty/Fenty";
import Brand from "./components/Brand/Brand";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header /> {/* nav포함 */}
      <Mainbanner />
      <Up />
      <Setting />
      <Say />
      <Today />
      <Card />
      <Contents />
      <Fenty />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
