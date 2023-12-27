import React from 'react'
import './advertizepart.css';
import AdverTizeData from './advertizeData.json'

export default function AdvertizePart() {
    return (
        <div className='advertize-part-full-page'>
            {
                AdverTizeData.map((data) => {
                    return <>

                        <div className="advertize-part">
                            <span className='advertize-heading'>{data.title}</span>
                            <span className='advertize-para'>{data.description}</span>
                        </div>
                    </>
                })
            }

        </div>
    )
}