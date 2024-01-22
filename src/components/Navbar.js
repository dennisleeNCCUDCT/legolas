import { Link } from 'react-router-dom';

function Navbar(){return(<div class="navbar">
<a href="#home">家</a>
<a href="#news">關於</a>
<div class="dropdown">
  <button class="dropbtn">下拉式選單
    <i class="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content">
    <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)">佛羅多</a>
    <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)">皮聘</a>
    <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)">山姆</a>
    <a href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings_(film_series)">甘道夫</a>
    </div>
    
</div> <Link to={"/login"}><div sttyle={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',justifyContent:"flex-end"}}><i className="fa fa-user " style={{
        color:"white",
        justifyContent:"flex-end",marginBottom:"auto",marginLeft:"12.5px"}}  aria-hidden="true"></i> </div></Link>
</div>)

}

export default Navbar;