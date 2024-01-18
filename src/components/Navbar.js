function Navbar(){return(<div class="navbar">
<a href="#home">家</a>
<a href="#news">關於</a>
<div class="dropdown">
  <button class="dropbtn">下拉式選單
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <a href="#">佛羅多</a>
    <a href="#">皮聘</a>
    <a href="#">山姆</a>
    <a href="#">甘道夫</a>
  </div>
</div> 
</div>)

}

export default Navbar;