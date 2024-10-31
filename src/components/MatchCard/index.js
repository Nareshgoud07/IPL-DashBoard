import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const formattedMatch = {
    competingTeam: recentMatch.competing_team,
    competingTeamLogo: recentMatch.competing_team_logo,
    result: recentMatch.result,
    matchStatus: recentMatch.match_status,
  }

  const {competingTeam, competingTeamLogo, result, matchStatus} = formattedMatch

  return (
    <li className="bg-container-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-image"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
