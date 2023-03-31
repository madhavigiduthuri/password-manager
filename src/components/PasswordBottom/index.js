/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/self-closing-comp */
// import PasswordLists from '../PasswordLists'
import PasswordCardList from '../PasswordCardList'
import './index.css'

const PasswordBottom = props => {
  const {
    searchInput,
    showPassword,
    passwordsList,
    handleInputs,
    handleDeleteBtn,
  } = props
  const filteredList =
    searchInput === ''
      ? passwordsList
      : passwordsList.filter(each =>
          each.url.toLowerCase().includes(searchInput.toLowerCase()),
        )
  return (
    <div className="main-container">
      <div className="heading-section">
        <div className="header-left">
          <h1 className="header">Your Passwords</h1>
          <div className="passwords-count-wrap">
            <p className="passwords-count">{filteredList.length}</p>
          </div>
        </div>
        <div className="header-right">
          <div className="input-left-image-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-icon"
            />
          </div>
          <input
            type="text"
            className="header-input"
            value={searchInput}
            onChange={e => handleInputs(e, 'search')}
          />
        </div>
      </div>
      <hr />
      <div className="filter-section">
        <div className="filter-right">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={e => handleInputs(e, 'check')}
          />
          <p>Show Passwords</p>
        </div>
      </div>
      {filteredList.length === 0 ? (
        <div className="no-pwds-wrap">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-password-image"
          />
          <p className="no-pwd-text">No Passwords</p>
        </div>
      ) : (
        <ul className="unordered-list">
          {filteredList.map(each => (
            <PasswordCardList
              key={each.id}
              data={each}
              showPassword={showPassword}
              handleDeleteBtn={handleDeleteBtn}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default PasswordBottom
