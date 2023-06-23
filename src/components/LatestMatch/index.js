// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="match-details-container">
      <div className="logo-venue-cont">
        <div className="team-venue-container">
          <p className="competing-heading">{competingTeam}</p>
          <p className="description">{date}</p>
          <p className="description">{venue}</p>
          <p className="description">{result}</p>
        </div>
        <img
          className="latest-team-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="hr-line" />
      <div className="innings-cont">
        <p className="description">First Innings</p>
        <p className="description">{firstInnings}</p>
        <p className="description">Second Innings</p>
        <p className="description">{secondInnings}</p>
        <p className="description">Man of the Match</p>
        <p className="description">{manOfTheMatch}</p>
        <p className="description">Umpires</p>
        <p className="description">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
