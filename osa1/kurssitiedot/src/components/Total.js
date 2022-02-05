const Total = (props) => {
    
    var sum = props.parts.map(p => p.exercises).reduce((s, p) => {
        var ret = s + p;
        console.log("previous: ", s, "current: ", p, "return: ", ret);

        return ret;
    });
    
    return (
        <p><b>total of {sum} exercises</b></p>
    )
}

export default Total