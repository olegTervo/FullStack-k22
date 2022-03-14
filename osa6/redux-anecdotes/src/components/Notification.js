import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.message ?? ""
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    visibility: notification === "" ? "hidden" : "visible"
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.notification.message
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification