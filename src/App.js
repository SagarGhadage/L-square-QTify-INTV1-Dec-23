import { useEffect, useState } from 'react';
import './App.css';
import Button, { btnTypes } from './components/Button/Button';
import Card from './components/Card/Card';
import HeroSession from './components/HeroSession/HeroSession';
import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import { Outlet } from 'react-router-dom';
import { fetchFilters, fetchNewAlbum, fetchSongs, fetchTopAlbum, fetchFaq } from './api/api';
function App() {
  const [searchData, SetSearchData] = useState([]);
  const [data, setData] = useState({})
  const generateData = (key, dataSource) => {
    dataSource().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data }
      });
    });
  }
  useEffect(() => {
    generateData("genres", fetchFilters)
    generateData("topAlbum", fetchTopAlbum);
    generateData("newAlbum", fetchNewAlbum);
    generateData("songs", fetchSongs);
    generateData("faqData", fetchFaq);
  }, []);
  const {
    topAlbum = [],
    newAlbum = [],
    songs = [],
    genres = [],
    faqData = [],
  } = data;

  return (<>
    <Navbar searchData={[...topAlbum, newAlbum]}>
      <Logo />
      <Search placeH={"Search a album of your choice"} />
      <Button btnType={btnTypes.feedBack}>Give Feedback</Button>
    </Navbar>
    <Outlet context={{ data: { topAlbum, newAlbum, songs, genres, faqData } }} />
    {/* <HeroSession /> */}
    {/* <Card data ={{}}type={"song"}/> */}
    {/* <Card data ={{}}type={"album"}/> */}
  </>
  );
}

export default App;
