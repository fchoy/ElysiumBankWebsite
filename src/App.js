import './App.css';
import Navbar from './Components/navbar'
import TopNavBar from './Components/topnavbar'
import Body from './Components/body'
import Services from './Components/services'
import Footer from './Components/footer'

function App() {
  return (
   <div style={{overflowX : "hidden"}}>
    <Navbar/>
    <TopNavBar/>
    <Body/>
    <Services/>
    <Footer/>
   </div>
  );
}

export default App;
