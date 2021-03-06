import User from "../User";

const App = function (props) {
    const name = "Vanda";
    return (
        <div>
            <User name={name} age={22} />
            <User name="Kate" age="28" />
        </div>
    );
};

export default App;
