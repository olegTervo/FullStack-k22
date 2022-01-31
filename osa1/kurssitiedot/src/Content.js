import Part from "./Part"

const Content = (props) => {
    return props.parts.map(p => (
        <Part part={p.name} exercise={p.exercises} />
      )
    )
}

export default Content