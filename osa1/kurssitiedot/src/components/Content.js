import Part from "./Part"

const Content = (props) => {
    return (
      <ul>
        {props.parts.map(p => 
            <Part key={p.id} part={p.name} exercise={p.exercises} />
          )}
      </ul>
    )
}

export default Content