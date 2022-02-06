const PersonForm = ({createCallback, nameInputCallback, phoneInputCallback}) => {
    return (
      <form>
        <div>
          name: <input onChange={nameInputCallback}/> <br/>
          number: <input onChange={phoneInputCallback}/>
        </div>
        <div>
          <button type="submit" onClick={createCallback}>add</button>
        </div>
      </form>
    );
}

export default PersonForm