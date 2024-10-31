import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  const formattedLatestMatchDetails = {
    umpires: latestMatch.umpires,
    result: latestMatch.result,
    manOfTheMatch: latestMatch.man_of_the_match,
    id: latestMatch.id,
    date: latestMatch.date,
    venue: latestMatch.venue,
    competingTeam: latestMatch.competing_team,
    competingTeamLogo: latestMatch.competing_team_logo,
    firstInnings: latestMatch.first_innings,
    secondInnings: latestMatch.second_innings,
    matchStatus: latestMatch.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = formattedLatestMatchDetails

  return (
    <div className="bg-container-latest-match">
      <div className="latest-match-first-section">
        <div className="first-section-card">
          <p className="competing-team-head">{competingTeam}</p>
          <p className="date-para">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-image"
        />
      </div>
      <hr className="line" />
      <div className="latest-match-last-section">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
