import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent1 = (props) => {
  return (
    <div className='flex justify-between  h-[90vh] px-5 py-10 gap-10'>
        <LeftContent/>
        <RightContent projects={props.projects}/>
    </div>
  )
}

export default PageContent1