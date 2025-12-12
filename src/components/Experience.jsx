import React from 'react'
import { Timeline } from './Timeline'
import { experiences } from '../constants'
const Experience = () => {
  return (
    <div className='mt-20'>
        <Timeline data={experiences} />
    </div>
  )
}

export default Experience