import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Card } from './components/Card'

function App() {
  const [cardData, setCardData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [collection, setCollection] = useState([]);

  // fetch data
  const apiAddress = "https://pokeapi.co/api/v2/pokemon?limit=10"

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiAddress)
      const data = await response.json();
      setCardData(data.results);
    }

    fetchData();
  }, []);

  // handle card click
  const handleCardClick = (name) => {
    if (collection.length === cardData.length) {
      alert("You have won the game!")
      return
    }
    
    if (collection.some((item) => item === name)) {
      console.log("return please");
      if (score > bestScore) {
        setBestScore(score)

      }
      setScore(0)
      setCollection([])
      return
    }

    setCollection(prev => [...prev, name]);

    console.log(collection)
    setScore(prevScore => prevScore + 1)
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <section className='card-grid'>
        {cardData.map((card, index) => (
          <div className='card' key={card.name} onClick={() => handleCardClick(card.name)}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </section>
    </>
  )
}

export default App
