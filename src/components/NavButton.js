import { NavLink, useMatch, useResolvedPath } from "react-router-dom"

function NavButton(props) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const buttonStyle = {
        margin: "10px 0 0 0",
        backgroundColor: "blue",
        border: "none",
        color: "white",
        padding: "10px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    };
    const activeButtonStyle = {
        margin: "10px 0 0 0",
        backgroundColor: "yellow",
        border: "none",
        color: "black",
        padding: "10px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
    }; 
    return (
        <NavLink to={props.to}>
            <button style={match ?activeButtonStyle : buttonStyle}>
                <p>{props.label}</p>
            </button>
        </NavLink>
    );
}

export default NavButton;