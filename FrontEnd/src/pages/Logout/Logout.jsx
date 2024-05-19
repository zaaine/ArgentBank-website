import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of Navigate
import { clearToken } from "../../redux/features/token.js";
import { clearFirstName } from "../../redux/features/firstName.js";
import { clearLastName } from "../../redux/features/lastName.js";

export function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate hook from react-router-dom

    useEffect(() => {
        // Dispatch actions to clear user data and token
        dispatch(clearToken());
        dispatch(clearFirstName());
        dispatch(clearLastName());

        // Remove token from localStorage
        localStorage.removeItem("token");

        // Redirect to home page after logout
        navigate("/");
    }, [dispatch, navigate]);

    return null; // You can return null or any other component here
}
