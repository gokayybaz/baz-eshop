import { IoMdBasket, IoMdPerson, IoMdSearch } from 'react-icons/io';
import './App.css'
import Header from './Components/Header/Header';


function App() {

  return (
    <div className='bg-[#f2f0f1] w-screen h-screen'>
      <Header />
      <nav className='px-20 flex items-center justify-between py-8 bg-[#ffff]'>
        {/* Logo Area */}
        <div>
          <h1 className='text-2xl font-extrabold'>Baz E-Shop</h1>
        </div>
        {/* Nav Buttons Area */}
        <div>
          <ul className='flex items-center font-semibold ml-12'>
            <li className='mr-6 cursor-pointer hover:underline underline-offset-8'>Erkek</li>
            <li className='mr-6 cursor-pointer hover:underline underline-offset-8'>Kadın</li>
            <li className='mr-6 cursor-pointer hover:underline underline-offset-8'>Çocuk</li>
            <li className='mr-6 cursor-pointer hover:underline underline-offset-8'>Yeni Sezon</li>
            <li className='cursor-pointer hover:underline underline-offset-8'>Günün İndirimleri</li>
          </ul>
        </div>
        {/* Search Bar Area */}
        <div>
          <div className='flex items-center'>
            <span className='p-4 ml-8 py-2 rounded-4xl border-r-0 border-black bg-black text-white rounded-r-none border' >
              <IoMdSearch size={24} />
            </span>
            <input type="text" className='border border-gray-400 p-4 py-2 w-[500px] rounded-l-none rounded-4xl bg-[#f2f0f1]' placeholder='Ürün Adı, Kodu, Türü Giriniz...' />
          </div>
        </div>
        {/* Nav Icon Buttons Area */}
        <div className='flex items-center'>
          <IoMdBasket size={28} className='mr-12 cursor-pointer' />
          <IoMdPerson size={28} className='cursor-pointer' />
        </div>
      </nav>
    </div>
  )
}

export default App
