import MainPage from './Containers/MainPage';
import NavBar from './Containers/Navbar';
import Updates from './Containers/Updates';
import dvh from './Static/dvh.jpg'

function App() {
  return (
    <>
    <a href="/"><img src={dvh} alt="photo of Drimnin Village Hall with a view over to Mull"/></a>
    <h1>Drimnin Village Hall</h1>
    <NavBar></NavBar>
    </>
  );
}

export default App;
