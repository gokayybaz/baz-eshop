import React from 'react'
import HeroSectionStaticsCardTitle from './HeroSectionStaticsCardTitle'
import HeroSectionStaticsCardSubtitle from './HeroSectionStaticsCardSubtitle'

function HeroSectionStaticsCard({ title, subtitle }) {
    return (
        <span className='flex flex-col'>
            <HeroSectionStaticsCardTitle title={title} />
            <HeroSectionStaticsCardSubtitle subtitle={subtitle} />
        </span>
    )
}

export default HeroSectionStaticsCard