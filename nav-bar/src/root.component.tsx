import "./root.component.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root(props) {
  return <BrowserRouter>

    <nav className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/product" className="link">
        Product
      </Link>
      <Link to="/sales/list" className="link">
        Sales
      </Link>
    </nav>
  </BrowserRouter>

}
