const PasswordItems = props => {
  const {eachPassword, bool, onDelete} = props
  const {website, username, password, id} = eachPassword

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-items-password">
      <p className="first-char">{website[0]}</p>
      <div className="wup-para-container">
        <p className="para1">{website}</p>
        <p className="para2">{username}</p>
        {bool ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            alt="stars"
            className="stars-image"
          />
        ) : (
          <p className="para3">{password}</p>
        )}
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default PasswordItems
