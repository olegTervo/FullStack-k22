const Notification = ({ message, isError }) => {
    if (message === null || message.length == undefined || message.length === 0) {
      return <></>
    }
  
    return (
      <div className={isError ? "error" : "ok"}>
        {message}
      </div>
    )
}

export default Notification