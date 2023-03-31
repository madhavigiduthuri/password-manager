import './index.css'

const PasswordCardList = props => {
  const {data, showPassword, handleDeleteBtn} = props
  const {url, username, password, id} = data
  return (
    <div className="card-wrap">
      <div className="initial-wrap">{url[0]}</div>
      <div className="mid-wrap">
        <p>{url}</p>
        <p>{username}</p>
        <p>{showPassword ? password : '*************'}</p>
      </div>
      <button
        type="button"
        onClick={() => handleDeleteBtn(id)}
        className="delete-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </div>
  )
}

export default PasswordCardList
