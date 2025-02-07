import React from 'react'


import HeroSectionTitle from './HeroSectionTitle'
import HeroSectionSubtitle from './HeroSectionSubtitle'
import HeroSectionExploreButton from './HeroSectionExploreButton'
import HeroSectionStaticsArea from './HeroSectionStaticsArea'
import HeroSectionImage from './HeroSectionImage'


function HeroSection() {
    return (
        <div className='py-24 border-x-0 border-black border px-40 flex items-center'>
            <div className='flex flex-col justify-around align-middle'>
                <div>
                    <HeroSectionTitle />
                    <HeroSectionSubtitle />
                </div>
                <HeroSectionExploreButton />
                <HeroSectionStaticsArea />
            </div>
            <div className='mr-48 '>
                <HeroSectionImage />
            </div>
        </div>
    )
}

export default HeroSection