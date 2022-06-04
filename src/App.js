import './App.css';
import GlobalStyles from './Themes/GlobalStyles';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {
  return (
    <>
    <GlobalStyles/>
    <Navbar/>
    <Notes/>
    </>
  );
}

export default App;
