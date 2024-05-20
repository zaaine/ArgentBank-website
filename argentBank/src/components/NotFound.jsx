import "./NotFound.scss";
import Button from "../button/Button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="error-container bg-dark">
      <h1 className="error-title">404</h1>
      <p className="error-text">Sorry, we couldn&apos;t find this page.</p>
      <Link to="/Home">
        <Button>Back to Homepage</Button>
      </Link>
    </div>
  );
}
