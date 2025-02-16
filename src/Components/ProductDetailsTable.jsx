import React from 'react';

const ProductDetailsTable = () => {
    return (
        <table className='min-w-full bg-white border border-gray-300 mt-16 shadow-md rounded-lg'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='py-3 px-6 border-none text-left text-gray-700 font-semibold'>Özellik</th>
                    <th className='py-3 px-6 border-none text-left text-gray-700 font-semibold'>Açıklama</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='py-3 px-6 border-none text-gray-800'>Malzeme</td>
                    <td className='py-3 px-6 border-none text-gray-800'>%100 Pamuk</td>
                </tr>
                <tr className='bg-gray-50'>
                    <td className='py-3 px-6 border-none text-gray-800'>Renk</td>
                    <td className='py-3 px-6 border-none text-gray-800'>Beyaz</td>
                </tr>
                <tr>
                    <td className='py-3 px-6 border-none text-gray-800'>Beden</td>
                    <td className='py-3 px-6 border-none text-gray-800'>S, M, L, XL</td>
                </tr>
                <tr className='bg-gray-50'>
                    <td className='py-3 px-6 border-none text-gray-800'>Yıkama Talimatları</td>
                    <td className='py-3 px-6 border-none text-gray-800'>Makinede yıkanabilir, düşük ısıda ütülenebilir</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProductDetailsTable;
