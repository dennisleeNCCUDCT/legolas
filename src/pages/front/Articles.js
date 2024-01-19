
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

function Articles(){return(<body class="bg-gray-100">
<div class="container mx-auto px-4">

    <header class="py-4">
    <Navbar/>
        <div class="flex justify-between items-center">
            <div class="text-3xl font-bold">
                Ideabooks
            </div>
            <div class="space-x-4">
                <button class="bg-green-500 text-white px-3 py-1 rounded">
                    Login
                </button>
                <button class="bg-transparent text-green-500 px-3 py-1 rounded border border-green-500">
                    Register
                </button>
            </div>
        </div>
    </header>
   
    <main class="py-4">
        <div class="flex flex-row flex-wrap justify-start -mx-2">
            
            <div class="px-2 w-1/3">
                <div class="bg-white p-4 rounded shadow mb-4">
                    <img alt="Placeholder image of interior design" class="w-full h-auto rounded mb-4" src="https://placehold.co/300x200" />
                    <h2 class="text-lg font-bold mb-2">
                        Modern Interior
                    </h2>
                    <p class="text-gray-700 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div class="px-2 w-1/3">
                <div class="bg-white p-4 rounded shadow mb-4">
                    <img alt="Placeholder image of cozy living room" class="w-full h-auto rounded mb-4" src="https://placehold.co/300x200" />
                    <h2 class="text-lg font-bold mb-2">
                        Cozy Living Room
                    </h2>
                    <p class="text-gray-700 text-sm">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div class="px-2 w-1/3">
                <div class="bg-white p-4 rounded shadow mb-4">
                    <img alt="Placeholder image of sleek kitchen" class="w-full h-auto rounded mb-4" src="https://placehold.co/300x200" />
                    <h2 class="text-lg font-bold mb-2">
                        Sleek Kitchen
                    </h2>
                    <p class="text-gray-700 text-sm">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
           
        </div>
    </main>
   
    <Footer/>
</div>
</body>)}

export default Articles