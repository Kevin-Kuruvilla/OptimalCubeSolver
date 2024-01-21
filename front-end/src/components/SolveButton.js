import { useEffect, useState } from 'react'
import { verifyColors } from '../utils/utils'

const SolveButton = ({ snap }) => {
  const [isValidScramble, setIsValidScramble] = useState(false)

  useEffect(() => {
    const isValid = verifyColors(snap)
    setIsValidScramble(isValid)
  }, [snap.items])

  return (
    <div className={`solve-button-container ${isValidScramble ? 'show' : ''}`}>
      <button>solve</button>
    </div>
  )
}

export default SolveButton
