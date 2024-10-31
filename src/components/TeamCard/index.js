import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {name, teamImageUrl, id} = team

  return (
    <li className="list-team-card">
      <Link to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
