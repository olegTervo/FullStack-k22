import Part from "./Part"

const Content = (props) => {
    return props.tasks.map(p => (
        <Part part={p.part} exercise={p.exercise} />
      )
    )
}

export default Content