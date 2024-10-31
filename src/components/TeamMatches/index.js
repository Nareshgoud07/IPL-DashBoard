import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamItemData()
  }

  getTeamItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamData: formatedData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-card-team-matches">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-matches-image"
            />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch latestMatch={latestMatchDetails} />
            <ul className="unordered-list-match-card">
              {recentMatches.map(eachCard => (
                <MatchCard
                  recentMatch={eachCard}
                  key={eachCard.competing_team}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
