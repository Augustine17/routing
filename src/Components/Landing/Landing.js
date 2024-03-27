import React from 'react'
import { HeroBanner } from '../HeroBanner/HeroBanner'
import { Content } from '../Content/Content'
import { CustomerTestimonials } from '../CustomerTestimonials/CustomerTestimonials'

const Landing = () => {
  return (
    <>
      <HeroBanner />
      <Content />
      <CustomerTestimonials />
    </>
  )
}

export default Landing