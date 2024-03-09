import React from 'react'
import "../styles/ViewSec.css"
import ViewSectionNav from '../components/ViewSectionNav'
import ViewSectionContent from '../components/ViewSectionContent'


const ViewSection = () => {
  return (
    <>
     <div className="views">
       {/* <ViewSectionNav/> */}
       <ViewSectionContent />
       </div> 
    </>
  )
}

export default ViewSection
