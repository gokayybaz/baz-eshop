import React, { useState, useEffect } from 'react'
import { FaCartPlus, FaChevronRight, FaFilter } from "react-icons/fa";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductDetailsTable from '../components/ProductDetailsTable';
import CustomerCommentCard from '@/Components/CustomerCommentSection/CustomerCommentCard';
import Accordion from '../components/Accordion';
import ProductCard from '@/Components/ProductCard/ProductCard';

function ProductDetailPage() {
    const [ratingChanged, setRatingChanged] = useState(4.5)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='px-28 py-12'>
            <span className='flex items-center'>
                <Link to={"/"}>
                    <div className='flex items-center'><p className='text-lg font-semibold text-gray-500 cursor-pointer underline-offset-2 hover:underline'>Anasayfa</p> <FaChevronRight className='ml-4' size={15} /></div>
                </Link>
                <p className='text-lg font-semibold cursor-pointer text-gray-500 underline-offset-2 ml-4 hover:underline'>Günün İndirimleri</p> <FaChevronRight className='ml-4' size={15} />
                <p className='text-lg font-semibold cursor-pointer text-gray-500 underline-offset-2 ml-4 hover:underline'>Erkek</p> <FaChevronRight className='ml-4' size={15} />
                <p className='text-lg font-semibold cursor-pointer underline-offset-2 ml-4 hover:underline'>T-Shirt</p>
            </span>

            <div className='flex justify-between'>
                <div className='flex my-12 items-center h-[480px]'>
                    <div className='flex flex-col justify-between items-center h-full'>
                        <div className='w-52 h-56 rounded-2xl bg-red-500'></div>
                        <div className='w-52 mt-4 h-56 rounded-2xl bg-green-500'></div>
                        <div className='w-52 mt-4 h-56 rounded-2xl bg-blue-500'></div>
                    </div>
                    <div className='h-full ml-6'>
                        <div className='w-[600px] h-full rounded-2xl bg-indigo-500'>

                        </div>
                    </div>
                </div>
                <div className=' mt-12'>
                    <h1 className='text-5xl text-black font-extrabold'>One Life Baskılı Tişört</h1>
                    <span className='flex items-center mt-2'>
                        <ReactStars
                            count={5}
                            value={ratingChanged}
                            //onChange={setRatingChanged}
                            size={30}
                            color2={'#ffd700'} />
                        <p className='ml-3 mt-1 text-lg'>4/5</p>
                    </span>
                    <span className='flex items-center'>
                        <p className='text-3xl font-semibold'>260</p>
                        <p className='text-3xl font-semibold ml-1'>₺</p>
                    </span>
                    <p className='text-gray-600 mt-4 text-lg'>Bu baskılı tişört her durum için mükemmeldir. Yumuşak ve nefes alabilen bir kumaştan üretilmiştir, <br /> üstün konfor ve stil sunar.</p>
                    <hr className='border-none bg-gray-200 h-[1px] my-5' />
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-gray-600 font-semibold'>Renk Seçiniz</p>
                            <span className='flex flex-row my-2.5'>
                                <span className='w-10 h-10 mr-4 cursor-pointer bg-red-500 rounded-full'></span>
                                <span className='w-10 h-10 mr-4 cursor-pointer bg-red-500 rounded-full'></span>
                                <span className='w-10 h-10 mr-4 cursor-pointer bg-red-500 rounded-full'></span>
                                <span className='w-10 h-10 mr-4 cursor-pointer bg-red-500 rounded-full'></span>
                            </span>
                        </div>
                        <div>
                            <p className='text-gray-600 font-semibold'>Beden Seçiniz</p>
                            <span className='flex flex-row my-2.5'>
                                <button className='p-3 bg-gray-200 cursor-pointer mr-4 text-gray-600 rounded-full px-6'>Small</button>
                                <button className='p-3 bg-gray-200 cursor-pointer mr-4 text-gray-600 rounded-full px-6'>Medium</button>
                                <button className='p-3 bg-gray-200 cursor-pointer mr-4 text-gray-600 rounded-full px-6'>Large</button>
                                <button className='p-3 bg-black cursor-pointer mr-4 text-white rounded-full px-6'>X-Large</button>
                            </span>
                        </div>
                    </div>
                    <hr className='border-none bg-gray-200 h-[1px] my-5' />
                    <div className='flex items-center justify-between'>
                        <span className='flex w-max rounded-full items-center p-3 px-4 bg-gray-200'>
                            <CgMathMinus size={25} className='cursor-pointer p-0.5 bg-transparent rounded-full text-black' />
                            <p className='mx-10 text-[20px]'>1</p>
                            <CgMathPlus size={25} className='cursor-pointer p-0.5 bg-transparent rounded-full text-black' />
                        </span>
                        <button className='flex ml-12 cursor-pointer bg-black text-white p-3 rounded-full w-full items-center justify-center '>
                            <FaCartPlus size={23} className='mr-4' /> Sepete Ekle
                        </button>
                    </div>

                </div>
            </div>
            <div>
                <Tabs className='mt-8'>
                    <TabList className='flex border-b border-gray-300'>
                        <Tab className='px-8 py-4 cursor-pointer font-bold text-gray-600  bg-none transition-colors duration-300' selectedClassName='text-gray-800 border-b-2 border-gray-800 outline-none'>Ürün Detayları</Tab>
                        <Tab className='px-8 py-4 cursor-pointer font-bold text-gray-600  bg-none transition-colors duration-300' selectedClassName='text-gray-800 border-b-2 border-gray-800 outline-none'>Yorumlar</Tab>
                        <Tab className='px-8 py-4 cursor-pointer font-bold text-gray-600  bg-none transition-colors duration-300' selectedClassName='text-gray-800 border-b-2 border-gray-800 outline-none'>Sık Sorulan Sorular</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='px-56'>
                            <ProductDetailsTable />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-between items-center px-48 mt-8'>
                            <h2 className='text-2xl font-bold'>Tüm Yorumlar (6)</h2>
                            <div className='flex items-center'>
                                <button className='cursor-pointer flex items-center px-4 bg-gray-200 p-2 rounded-full mr-4'>
                                    <FaFilter size={20} className='mr-2' /> Filtrele
                                </button>
                                {/* <button className='text-gray-600 mr-4'>Tarihe Göre Sırala</button> */}
                                <button className='bg-black px-5 cursor-pointer text-white p-2 rounded-full'>Yorum Yaz</button>
                            </div>
                        </div>
                        <div className='grid gap-18 mt-8 grid-cols-3 place-content-center place-items-center px-48'>
                            <CustomerCommentCard comment={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto commodi nisi ullam sequi aperiam culpa ab quibusdam, quaerat ut officia?'} starCount={5} title={'Gökay Baz'} />
                            <CustomerCommentCard comment={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto commodi nisi ullam sequi aperiam culpa ab quibusdam, quaerat ut officia?'} starCount={5} title={'Gökay Baz'} />
                            <CustomerCommentCard comment={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto commodi nisi ullam sequi aperiam culpa ab quibusdam, quaerat ut officia?'} starCount={5} title={'Gökay Baz'} />
                            <CustomerCommentCard comment={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto commodi nisi ullam sequi aperiam culpa ab quibusdam, quaerat ut officia?'} starCount={5} title={'Gökay Baz'} />
                            <CustomerCommentCard comment={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto commodi nisi ullam sequi aperiam culpa ab quibusdam, quaerat ut officia?'} starCount={5} title={'Gökay Baz'} />
                            <CustomerCommentCard comment={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto commodi nisi ullam sequi aperiam culpa ab quibusdam, quaerat ut officia?'} starCount={5} title={'Gökay Baz'} />
                        </div>
                        <div className='flex justify-center mt-8'>
                            <button className='border px-6 border-gray-300 text-black cursor-pointer font-semibold py-2 rounded-full bg-white'>
                                Daha Fazla Yorum Yükle
                            </button>
                        </div>
                        {/* <div className='mt-8 px-48'>
                        <h3 className='text-2xl font-semibold mb-4'>Yorum Yap</h3>
                        <form>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='comment'>
                                    Yorumunuz
                                </label>
                                <textarea id='comment' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows='4'></textarea>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='rating'>
                                    Puanınız
                                </label>
                                <ReactStars
                                    count={5}
                                    value={ratingChanged}
                                    onChange={setRatingChanged}
                                    size={30}
                                    color2={'#ffd700'} />
                            </div>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                                Gönder
                            </button>
                        </form>
                    </div> */}
                    </TabPanel>
                    <TabPanel>
                        <div className='px-56 mt-16'>
                            <Accordion title="Bu ürünün malzemesi nedir?">
                                <p>Bu ürün %100 pamuktan üretilmiştir.</p>
                            </Accordion>
                            <Accordion title="Bu ürünün bakımı nasıl yapılır?">
                                <p>Makinede yıkanabilir, düşük ısıda ütülenebilir.</p>
                            </Accordion>
                            <Accordion title="Bu ürünün bedenleri nelerdir?">
                                <p>Small, Medium, Large ve X-Large bedenleri mevcuttur.</p>
                            </Accordion>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <div className='flex flex-col items-center justify-center mt-36'>
                <h1 className='text-5xl text-black font-extrabold'>ŞUNLARI DA BEĞENEBİLİRSİNİZ</h1>
                <div className='mt-16 px-40 flex items-center justify-between w-full'>
                    <ProductCard title={'Basic Tişört'} price={200} starValue={3} />
                    <ProductCard title={'Basic Tişört'} price={200} starValue={3} />
                    <ProductCard title={'Basic Tişört'} price={200} starValue={3} />
                    <ProductCard title={'Basic Tişört'} price={200} starValue={3} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage