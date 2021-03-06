const User = (props) => {
    return (
        <div>
            <h1>Postman: </h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

export default User;
