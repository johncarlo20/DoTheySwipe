import React from 'react'
import SectionWrapper from '../components/shared/SectionWrapper.jsx'
import ProfileDetail from '../components/profileDetail/ProfileDetail.jsx'
import profile1 from '../assets/images/profile1.png'
import profile2 from '../assets/images/profile2.png'
import profile3 from '../assets/images/profile3.png'
import profile4 from '../assets/images/profile4.png'
import profile5 from '../assets/images/profile5.png'
import { PROFILE_DETAIL_PAGE } from '../tokens/content'

const images = [profile1, profile2, profile3, profile5, profile4]

const ProfileDetails = () => (
  <SectionWrapper title={PROFILE_DETAIL_PAGE.title}>
    <ProfileDetail profile={PROFILE_DETAIL_PAGE.profile} images={images} />
  </SectionWrapper>
)

export default ProfileDetails
