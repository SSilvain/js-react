const Transaction = ({ transactions }) => {
    return (
        <li>
            <div>{transactions.label}</div>
            <div>{transactions.value}</div>
        </li>
    );
};

export default Transaction;
