import Transaction from "../Transaction";

const Transactions = ({ transactions }) => {
    const renderTrans = () => {
        return transactions.map((t) => {
            return <Transaction key={t.id} transactions={t} />;
        });
    };
    return <ul>{renderTrans()}</ul>;
};

export default Transactions;
