import { useState } from 'react';
import Menu from './components/Menu';
import Point from './components/Point';

function App() {
  const [points, setPoints] = useState([])
  const [showNumbers, setShowNumbers] = useState(false)

  function handlePlaceCircle(e) {
    const { pageX, pageY } = e
    setPoints([...points, { x: pageX, y: pageY }])
  }

  const menuFuncs = { points, setPoints, setShowNumbers }

  return <div className='App' onClick={e => handlePlaceCircle(e)}>
    {points.length > 0 && <Menu funcs={menuFuncs} />}
    {points.map((point, index) => <Point key={index} point={point} number={index} showNumbers={showNumbers} />)}
  </div>
}

export default App;
