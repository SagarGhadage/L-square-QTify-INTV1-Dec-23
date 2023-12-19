import './App.css';
import Button from './components/Button/Button';
import HeroSession from './components/HeroSession/HeroSession';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
function App() {
  return (<>
    <Navbar>
      <Logo />
      <Search placeH={"Search a album of your choice"} />
      <Button>Give feedback</Button>
    </Navbar>
    <HeroSession />
  </>
  );
}

export default App;
