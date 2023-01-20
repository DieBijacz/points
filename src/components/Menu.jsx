export default function Menu({ funcs }) {
  const { points, setPoints, setShowNumbers } = funcs

  function handleBackButton(e) {
    e.stopPropagation()
    const newPoints = [...points]
    newPoints.pop()
    setPoints(newPoints)
  }

  function handleReset(e) {
    e.stopPropagation()
    setPoints([])
  }

  function handleShow(e) {
    e.stopPropagation()
    setShowNumbers(prev => !prev)
  }

  return (
    <div className='menu'>
      <button onClick={e => handleShow(e)}>Show</button>
      <button onClick={e => handleReset(e)}>Reset</button>
      <button onClick={e => handleBackButton(e)}>Back</button>
    </div>
  )
}