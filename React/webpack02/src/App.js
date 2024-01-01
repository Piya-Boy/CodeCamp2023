const App = () => {
    const [counters, setCounters] = React.useState([0]);
    const [sum, setSum] = React.useState(0);

    const addCounter = () => {
        setCounters([...counters, 0]);
    };



    const removeCounter = (index) => {
        const updatedCounters = [...counters];
        updatedCounters.splice(index, 1);
        setCounters(updatedCounters);
        setSum(updatedCounters.reduce((acc, curr) => acc + curr, 0));
    }

    return (
        <>
            <h1>Counter</h1>
            <AddButton onClick={addCounter} />

            <SumInfo sum={sum} />
            {counters.map((count, index) => (
                <Counter
                    key={index}
                    sum={count}
                    setSum={(value) => {
                        const updatedCounters = [...counters];
                        updatedCounters[index] = value;
                        setCounters(updatedCounters);
                        setSum(updatedCounters.reduce((acc, curr) => acc + curr, 0));
                    }}
                    removeCounter={() => removeCounter(index)}
                />
            ))}
        </>
    )
}

export default App