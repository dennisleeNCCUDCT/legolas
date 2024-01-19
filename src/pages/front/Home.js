import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";


function Home() {return(<div className="container mx-auto">
    
<header className="bg-white py-4">
<Navbar/>
</header>
<main>
    <section className="py-8">
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-white p-6">
                <h2 className="text-2xl font-bold mb-4">嘎拉嘎拉 幫你找園丁</h2>
                <p className="text-sm mb-4">園丁的照片</p>
                <button className="bg-green-500 text-white px-4 py-2 text-xs rounded mb-4">照片集</button>
                <div class="home-info relative">
                <div class="infos absolute inset-0 flex flex-col items-center justify-center z-10">
        <h3 class="text-xl font-bold">
         Google 登錄
        </h3><br></br>
       
        <span class=" text-gray px-4 -mt-3 inline-block">或者</span>
     
      <input class="rounded-full border border-gray-300 p-2 mt-4 w-240 text-center" placeholder="使用電子信箱註冊" type="text"/>
      <button class="bg-green-500 text-white px-4 py-2 text-xs rounded mt-4">
        使用電子信箱註冊
      </button>
      <p class="text-xs text-center mt-4 px-6">
        繼續註冊或登入即表示您同意legolas 使用條款和隱私權政策。我同意 Houzz 可以出於行銷目的向我的電子郵件地址發送電子郵件。您可以隨時透過設定停止它。
      </p>
       </div>
       <img alt="Home renovation placeholder" class="w-full" src="https://placehold.co/600x400"/>
      </div></div>
            <div className="bg-gray-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-4">超強園丁搓合網站</h2>
                <p className="text-sm mb-4">為園丁專家提供支援的專業平台。</p>
                <input type="text" className="rounded-full" placeholder="  Search.." ></input><br/><br/>
                <button className="bg-green-500 text-white px-4 py-2 text-xs rounded mb-4">詳情請洽</button>
                <img src="https://placehold.co/600x400" alt="Home renovation placeholder" className="w-full"/>
            </div>
        </div>
    </section>
    <section className="py-8 bg-gray-100">
        <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">CONTENTS</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-white p-4">
                    <img src="https://placehold.co/250x150" alt={`Content placeholder ${index + 1}`} className="w-full mb-2"/>
                    <h3 className="text-lg font-semibold mb-1">照片範例</h3>
                    <p className="text-sm">照片內容</p>
                </div>
            ))}
        </div>
      
    </section>
</main>
<Footer/>
</div>)}
export default Home;