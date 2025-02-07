import React from 'react'
import HeroSectionStaticsCard from './HeroSectionStaticsCard'
import HeroSectionStaticsAreaLine from './HeroSectionStaticsAreaLine'

function HeroSectionStaticsArea() {
    return (
        <div className='mt-14 flex items-center'>
            <HeroSectionStaticsCard title={"200+"} subtitle={"Uluslararası Marka"} />
            <HeroSectionStaticsAreaLine />
            <HeroSectionStaticsCard title={'2000+'} subtitle={'Yüksek Kaliteli Ürün'} />
            <HeroSectionStaticsAreaLine />
            <HeroSectionStaticsCard title={'30000+'} subtitle={'Mutlu Müşteri'} />
        </div>
    )
}

export default HeroSectionStaticsArea