import {Component} from 'react'
import {v4 as getId} from 'uuid'
import PasswordBottom from '../PasswordBottom'
import PasswordForm from '../PasswordForm'
import './index.css'

class PasswordManager extends Component {
  state = {
    urlInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    showPassword: false,
    passwordsList: [],
  }

  handleInputs = (e, type) => {
    if (type === 'website') {
      this.setState({
        urlInput: e.target.value,
      })
    } else if (type === 'username') {
      this.setState({
        userNameInput: e.target.value,
      })
    } else if (type === 'password') {
      this.setState({
        passwordInput: e.target.value,
      })
    } else if (type === 'search') {
      this.setState({
        searchInput: e.target.value,
      })
    } else if (type === 'check') {
      this.setState(prevState => ({
        showPassword: !prevState.showPassword,
      }))
    }
  }

  handleAddBtn = e => {
    e.preventDefault()
    const {urlInput, userNameInput, passwordInput} = this.state
    const newData = {
      url: urlInput,
      username: userNameInput,
      password: passwordInput,
      id: getId(),
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newData],
      urlInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  handleDeleteBtn = id => {
    const {passwordsList} = this.state
    const remainingList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: remainingList})
  }

  render() {
    const {
      urlInput,
      userNameInput,
      passwordInput,
      searchInput,
      showPassword,
      passwordsList,
    } = this.state
    return (
      <div className="passwordmanager-app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="image-logo"
        />
        {/* upper container */}
        <PasswordForm
          urlInput={urlInput}
          userNameInput={userNameInput}
          passwordInput={passwordInput}
          handleInputs={this.handleInputs}
          handleAddBtn={this.handleAddBtn}
        />
        {/* lower container */}
        <PasswordBottom
          searchInput={searchInput}
          showPassword={showPassword}
          passwordsList={passwordsList}
          handleInputs={this.handleInputs}
          handleDeleteBtn={this.handleDeleteBtn}
        />
      </div>
    )
  }
}

export default PasswordManager
