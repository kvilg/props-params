
const Header =(params)=> {


  const toggleClass = () => {
    params.setName("член");
  };

  return (
    <div className="Header">
        heder
        <button onClick={toggleClass}>btn</button>
    </div>
  );
}

export default Header;
