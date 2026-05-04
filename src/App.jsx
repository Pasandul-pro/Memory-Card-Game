import { GameHeader } from './Components/GameHeader'
import { Card } from './Components/Card'

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  return (
    <div className='app'>
      <GameHeader score={0} moves={1}/>
      <div className="cards-grid">
        {cardValues.map((card) => (
          <Card card={card}/>
        ))}
      </div>
    </div>
  )
}

export default App
