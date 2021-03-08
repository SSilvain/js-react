const Balance = ({ balance }) => {
    let myArr = ["hello", "world"];
    let [one, two] = myArr;
    return (
        <>
            <div>{balance}</div>
            <div>Destructuring {one + two}</div>
        </>
    );
};

export default Balance;
