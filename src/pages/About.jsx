import React from 'react'
import SectionWrapper from '../components/shared/SectionWrapper'
import SearchForm from '../components/search/SearchForm'
import { ABOUT_PAGE } from '../tokens/content'

const About = () => {
  return (
    <div>
      <SectionWrapper
        title={ABOUT_PAGE.title}
        description={ABOUT_PAGE.description}
      >
        <SearchForm layout="md:grid-cols-2" />
      </SectionWrapper>
    </div>
  )
}

export default About
