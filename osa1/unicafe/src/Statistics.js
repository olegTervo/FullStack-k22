import StatisticLine from './StatisticLine'

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad

    if(all == 0) {
        return <p>No feedback given</p>
    }
    return (
        <table>
          <tbody>
            <StatisticLine text={'good'} value={props.good} />
            <StatisticLine text={'neutral'} value={props.neutral} />
            <StatisticLine text={'bad'} value={props.bad} />
            <StatisticLine text={'all'} value={all} />
            <StatisticLine text={'average'} value={(props.good - props.bad) / all} />
            <StatisticLine text={'positive'} value={(props.good / all * 100) + '%'} />
          </tbody>
        </table>
    )
}

export default Statistics