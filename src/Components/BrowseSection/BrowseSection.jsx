import React from 'react'


import Image1 from '../../assets/image-1.svg'
import Image2 from '../../assets/image-2.svg'
import Image3 from '../../assets/image-3.svg'
import Image4 from '../../assets/image-4.svg'


import BrowseSectionTitle from './BrowseSectionTitle'
import BrowseSectionSmallCard from './BrowseSectionSmallCard'
import BrowseSectionWideCard from './BrowseSectionWideCard'

// ? Bu component kullanıcının kendi kıyafet tarzını seçmesine yardımcı olacak component'dir.
const BrowseSection = () => {
  return (
    <div className='mx-56 flex flex-col items-center p-20 rounded-2xl bg-[#f2f0f1]'>
      <BrowseSectionTitle title={'KIYAFET TARZINIZI KEŞFEDİN'} />
      <div className='mt-16 grid grid-cols-5 w-full gap-12'>
        <BrowseSectionSmallCard title={'Günlük'} image={Image1} />
        <BrowseSectionWideCard title={'Parti'} image={Image2} />
        <BrowseSectionWideCard title={'Ofis'} image={Image3} />
        <BrowseSectionSmallCard title={'Sportif'} image={Image4} />
      </div>
    </div>
  )
}

export default BrowseSection