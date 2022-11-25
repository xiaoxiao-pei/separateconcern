import { useNavigate } from "react-router-dom";
//import Button from 'react-bootstrap/Button';
import Button from "@mui/material/Button";

function HomeButton() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        try {
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit2 = (event) => {
        try {
            navigate("/about", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit3 = (event) => {
        try {
            navigate("/contact", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div style = {{ flexDirection: "row", direction:  "rtl"    }} >
            {/* <Button variant="primary" onClick={handleSubmit} >Home</Button>
            <Button variant="secondary" onClick={handleSubmit} >About</Button>
            <Button variant="danger" onClick={handleSubmit} >Contact</Button> */}
            <Button variant="contained" onClick={handleSubmit}>Home</Button>
            <Button variant="contained" onClick={handleSubmit2}>About</Button>
            <Button variant="contained" onClick={handleSubmit3}>Contact</Button>

        </div>
    );
}
export default HomeButton;