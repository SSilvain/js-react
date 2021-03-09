import Transaction from "../Transaction";

const Transactions = ({ transactions }) => {


    const renderTrans = () => {return (
        transactions.map(t => {
            return <Transaction key={t.id} label={t.label} value={t.value}/>
        }))
    }
                return <ul>{renderTrans()}</ul>
};

export default Transactions;
