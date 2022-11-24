function UserActions(props) {
    const handelOnClick = () => {
        props.setColor(props.color === "blue" ? "red" : (props.color === 'red' ? "green" : "blue"));
        props.setCount(props.count + 1)
    };
    return <button onClick={handelOnClick}>
        Click me React
    </button>
}
export default UserActions;