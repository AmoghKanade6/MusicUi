import logo from "../assets/herologo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img className="herologo" src={logo} />
          <span className="title">Tunes</span>
        </div>
        <div className="sign-up">
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
