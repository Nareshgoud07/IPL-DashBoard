import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeamsList: [], isLoad: true}

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeamsList: formattedData, isLoad: false})
  }

  render() {
    const {iplTeamsList, isLoad} = this.state

    return (
      <Link to="/" className="bg-container">
        {isLoad ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="ipl-main-head-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-main-head">IPL Dashboard</h1>
            </div>
            <ul className="unordered-ipl-iteams-cards">
              {iplTeamsList.map(each => (
                <TeamCard team={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </Link>
    )
  }
}

export default Home
