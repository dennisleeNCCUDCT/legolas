
import Navbar from "../../components/Navbar"

import Footer from "../../components/footer"


function Login(){return(<body class="bg-gray-100"><Navbar/>
<div class="min-h-screen flex flex-col justify-center items-center">
 <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
  <h1 class="text-2xl font-bold mb-8">
   登入
  </h1>
  <div class="space-y-4">
   <div>
    <label class="block text-sm font-medium text-gray-700" for="email">
     電子郵件或電話號碼
    </label>
    <input class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" id="email" placeholder="電子郵件" type="email"/>
   </div>
   <div>
    <label class="block text-sm font-medium text-gray-700" for="password">
     密碼
    </label>
    <input class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" id="password" placeholder="密碼" type="password"/>
   </div>
  </div>
  <div class="flex items-center justify-between mt-4">
   <div class="flex items-center">
    <input class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" id="remember_me" type="checkbox"/>
    <label class="ml-2 block text-sm text-gray-900" for="remember_me">
     保持登入狀態
    </label>
   </div>
   <div class="text-sm">
    <p class="font-medium text-indigo-600 hover:text-indigo-500" >
     忘記密碼了嗎？
    </p>
   </div>
  </div>
  <div class="mt-6">
   <button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
    登入
   </button>
  </div>
  <div class="mt-6 grid grid-cols-2 gap-3">
   <div>
    <button class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
     <span class="sr-only">
      Sign in with Google
     </span>
     <i class="fab fa-google mr-2">
     </i>
     使用Google登入
    </button>
   </div>
   <div>
    <button class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
     <span class="sr-only">
      Sign in with Facebook
     </span>
     <i class="fab fa-facebook-f mr-2">
     </i>
     使用Facebook 登入
    </button>
   </div>
  </div>
  <p class="mt-6 text-sm text-gray-600 text-center">
   還沒有帳戶？
   <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#">
    立即加入
   </a>
  </p>
  <p class="mt-2 text-xs text-gray-500 text-center">
   通過點擊上面的“登入”按鈕或使用Facebook或Google登入，即表示您同意 嘎拉嘎拉 的使用條款和隱私政策。嘎拉嘎拉 可能會向您發送有關我們的產品和服務的電子郵件，您可以隨時取消訂閱，我們將嚴格保護您的隱私。
  </p>
 </div>
 
</div>
<Footer/>
</body>)}

export default Login