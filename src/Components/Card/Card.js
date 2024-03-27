import React from 'react'
import { Rate } from 'antd';

import './Card.css'

export const Card = ({item}) => {
  return (
    <div className='card'>
        <div className='top'>
            <div className='together'>
                <h2 class="text-gray-800 font-semibold text-xl">{item.name}</h2>
                <Rate disabled defaultValue={item.rating} />
            </div>
            <p class="text-gray-600 text-sm mb-2">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="inline mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg> {item.address}, {item["address line 2"]}
            </p>
            <p class="text-gray-600 text-sm mb-4">{item.outcode} {item.postcode}</p>
        </div>
        <div className='bottom'>
            <div class="mb-2 text-green-500">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 416 512" class="inline mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path></svg>{item.type_of_food}
            </div>
            <a href={item.URL} className='text-blue-500'>Visit Menu</a>
        </div>
    </div>
  )
}