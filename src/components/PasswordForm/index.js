import InputBox from '../InputBox'
import './index.css'

const PasswordForm = props => {
  const {
    urlInput,
    userNameInput,
    passwordInput,
    handleInputs,
    handleAddBtn,
  } = props
  return (
    <div className="new-password-container">
      <form className="form" onSubmit={e => handleAddBtn(e)}>
        <h1 className="add-password">Add New Password</h1>
        <InputBox
          imageSrc="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          imageAlt="website"
          inputPlaceHolder="Enter Website"
          inputType="text"
          valueOf={urlInput}
          handleInputs={handleInputs}
        />
        <InputBox
          imageSrc="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          imageAlt="username"
          inputPlaceHolder="Enter Username"
          inputType="text"
          valueOf={userNameInput}
          handleInputs={handleInputs}
        />
        <InputBox
          imageSrc="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          imageAlt="password"
          inputPlaceHolder="Enter Password"
          inputType="text"
          valueOf={passwordInput}
          handleInputs={handleInputs}
        />
        <div className="button-container">
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="image-key"
      />
    </div>
  )
}

export default PasswordForm
