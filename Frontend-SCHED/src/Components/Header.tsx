const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <img
            src="./public/icons.svg"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          <span className="navbar-brand mb-0 h3 align-text-center">
            Naga College Foundation
          </span>
          <button className="btn btn-primary" onClick={() => alert("Logout")}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
