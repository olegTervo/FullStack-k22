const Total = (props) => {
    var sum = 0;
    props.parts.forEach(p => sum+=Number(p.exercises));
    
    return (
        <p>Number of exercises {sum}</p>
    )
}

export default Total