import React from 'react'

import BannerSliderSeo from '../Components/seoPage/BannerSliderSeo';
import RightChoiceSeo from '../Components/seoPage/RightChoiceSeo';
import MainContentSeo from '../Components/seoPage/MaincontentSeo';
import YtSeo from '../Components/seoPage/YtSeo';
import Faqs from '../Components/seoPage/Faqs';
import OurClients from '../Components/seoPage/OurClients';
import ProductsSeo from '../Components/seoPage/ProductsSeo';

const SeoPage = () => {
  return (

      <>
        <BannerSliderSeo />
        <RightChoiceSeo />
        <MainContentSeo />
        <ProductsSeo />
        <OurClients />
        <YtSeo />
        <Faqs />
      </>
    

      
    
  )
}

export default SeoPage;