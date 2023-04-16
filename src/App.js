import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItems from './components/PasswordItems'

class App extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    bool: true,
    search: '',
  }

  onDelete = id => {
    const {passwordsList} = this.state
    const filterData = passwordsList.filter(eachId => eachId.id !== id)
    this.setState({passwordsList: filterData})
  }

  onShowingPassword = () => {
    this.setState(prevState => ({bool: !prevState.bool}))
  }

  addPasswordDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  onEnterWebsite = event => {
    this.setState({website: event.target.value})
  }

  onEnterUserName = event => {
    this.setState({username: event.target.value})
  }

  onEnterPassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {website, username, password, bool, search} = this.state
    const {passwordsList} = this.state
    const filterPasswordsList = passwordsList.filter(eachFilter =>
      eachFilter.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="card-container">
          <div className="password-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="input-element-container">
            <form className="form" onSubmit={this.addPasswordDetails}>
              <h1 className="password-heading">Add New Password</h1>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website"
                />
                <input
                  type="website"
                  placeholder=" Enter Website"
                  className="input"
                  onChange={this.onEnterWebsite}
                  value={website}
                />
              </div>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website"
                />
                <input
                  type="text"
                  placeholder=" Enter Username"
                  className="input"
                  onChange={this.onEnterUserName}
                  value={username}
                />
              </div>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="website"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input"
                  onChange={this.onEnterPassword}
                  value={password}
                />
              </div>
              <div className="add-button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="password-manager"
            />
          </div>
          <div className="showing-element-container">
            <div className="password-search-container">
              <div className="password-container">
                <h1 className="your-password-heading">Your Passwords</h1>
                <p className="length-count">{filterPasswordsList.length}</p>
              </div>
              <div className="website-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="website"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="input"
                  onChange={this.onChangeSearch}
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="input-label-container">
              <button
                type="button"
                className="delete-button"
                onClick={this.onShowingPassword}
              >
                <input className="checkbox" type="checkbox" id="checkbox" />
              </button>
              <label className="checkbox-label" htmlFor="checkbox">
                Show Passwords
              </label>
            </div>
            <div>
              {filterPasswordsList.length > 0 ? (
                <ul className="unordered-list-password">
                  {filterPasswordsList.map(eachPassword => (
                    <PasswordItems
                      eachPassword={eachPassword}
                      key={eachPassword.id}
                      onDelete={this.onDelete}
                      bool={bool}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-passwords-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                    alt="no passwords"
                    className="no-passwords-image"
                  />
                  <p className="no-passwords-text">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
