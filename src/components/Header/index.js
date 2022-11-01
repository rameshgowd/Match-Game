import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav className="nav-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        alt="website logo"
        className="website-logo-image"
      />
      <ul className="score-timer-container">
        <li className="timer-container">
          <p className="score">
            Score:
            <span className="span">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="timer">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
