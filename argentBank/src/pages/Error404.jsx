import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className={"error404"}>
      <h1>404 Error</h1>
      <h2>Page not found</h2>
      <Link to="/">Return to the home page</Link>
    </div>
  );
}

export default Error404;
