import './App.css';
import Navbar from './Components/navbar'
import TopNavBar from './Components/topnavbar'
import Body from './Components/body'
import Services from './Components/services'
import Footer from './Components/footer'
import Credits from './Components/credits'

function App() {
  return (
   <div style={{overflowX : "hidden"}}>
    <Navbar/>
    <TopNavBar/>
    <Body/>
    <Services/>
    <Footer/>
    <Credits/>
   </div>
  );
}

export default App;
