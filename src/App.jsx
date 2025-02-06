import { IoMdReturnRight } from 'react-icons/io';
import './App.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';


function App() {

  return (
    <div className='bg-[#f2f0f1] w-screen h-screen'>
      <Header />
      <Navbar />
      <div className='p-16 px-36'>
        <div className='w-[600px] flex flex-col h-[340px] justify-around align-middle'>
        <div>
          <h2 className='text-6xl font-extrabold'>TARZINIZA UYGUN <br /> KIYAFETLER BULUN</h2>
          <p className='mt-8 text-lg text-gray-600'>Bireyselliğinizi ortaya çıkarmak ve stil anlayışınıza hitap etmek için tasarlanmış, titizlikle hazırlanmış çeşitli giysi yelpazemize göz atın.</p>
        </div>
        <button className='bg-black cursor-pointer w-max px-10 py-5 rounded-full text-white font-bold'>Keşfetmeye Başla</button>
        </div>
      </div>
    </div>
  )
}

export default App
