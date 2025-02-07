import React from 'react'


import HeroSectionTitle from './HeroSectionTitle'
import HeroSectionSubtitle from './HeroSectionSubtitle'
import HeroSectionExploreButton from './HeroSectionExploreButton'
import HeroSectionStaticsArea from './HeroSectionStaticsArea'
import HeroSectionImage from './HeroSectionImage'


function HeroSection() {
    return (
        <div className='p-28 px-40 flex'>
            <div className='flex flex-col h-[340px] justify-around align-middle'>
                <div>
                    <HeroSectionTitle />
                    <HeroSectionSubtitle />
                </div>
                <HeroSectionExploreButton />
                <HeroSectionStaticsArea />
            </div>
            <div className='mr-48'>
                <HeroSectionImage />
            </div>
        </div>
    )
}

export default HeroSection