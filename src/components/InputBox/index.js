import './index.css'

const InputBox = props => {
  const {
    imageSrc,
    imageAlt,
    inputPlaceHolder,
    inputType,
    valueOf,
    handleInputs,
  } = props
  return (
    <div className="input-container">
      <img src={imageSrc} alt={imageAlt} className="icon-image" />
      {/* <hr className="hr-line" /> */}
      <input
        type={inputType}
        value={valueOf}
        className="input"
        placeholder={inputPlaceHolder}
        onChange={e => handleInputs(e, imageAlt)}
      />
    </div>
  )
}

export default InputBox
