import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Card } from './components/Card'

function App() {
  const [cardData, setCardData] = useState([]);

  
  const apiAddress = "https://pokeapi.co/api/v2/pokemon?limit=10"

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiAddress)
      const data = await response.json();
      console.log('reults:', data.results)
      setCardData(data.results);
    }

    fetchData();
  }, []);

  console.log("cardData:", cardData.results)

  return (
    <>
    <Header />
    <section className='card-grid'>
        {cardData.map((card, index) => (
          <div className='card' key={card.name}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
    </section>
    </>
  )
}

export default App
