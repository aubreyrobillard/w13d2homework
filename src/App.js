import logo from './logo.svg';
import './App.css';
import Movies from './Components/movies'

function App(props) {

  const moviesArray = [
    {
      name: "Son of Rambow",
      year: "2007",
      rating: "PG-13",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7XfyKtegnSfnRQIoPjHzgpX4GkqR97Y0CdEMdRd1VynmPbuN"

    },
    {
      name: "Odd Thomas",
      year: "2013",
      rating: "PG-13",
      image: "https://m.media-amazon.com/images/M/MV5BMjI1MDE2NjI1OV5BMl5BanBnXkFtZTgwMzEyMTMxMTE@._V1_.jpg"

    },
    {
      name: "The Conjuring",
      year: "2013",
      rating: "R",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6Ao-5WuUc8dbzISTQGHy4pH3HZ6iUBboqeoPWLPp-cmel4-Jh"

    },
    {
      name: "Shrek 2",
      year: "2004",
      rating: "PG",
      image: "https://m.media-amazon.com/images/I/71HQiOZsZ6L._AC_UF894,1000_QL80_.jpg"

    },
    {
      name: "The Grudge",
      year: "2004",
      rating: "PG-13",
      image: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/234590_grudge_the_2004_1400x2100_3.jpg?itok=vq0-vtnI"

    },
  ]

  return (
    console.log("apps.js", moviesArray[0].name),
    <div className="App">
      <Movies/>
    </div>
  );
}

export default App;
