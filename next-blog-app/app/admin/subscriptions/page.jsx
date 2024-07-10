'use client'
import React, { useEffect, useState } from 'react'
import SubsTableItem from '@/Components/AdminComponents/SubsTableItem'
import axios from 'axios';

const page = () => {

  const [emails, setEmails] = useState([]);

  const fetchEmails = async() =>{
    const response = await axios.get('/api/email');
    setEmails(response.data.emails);
  }

  useEffect (() => {
    fetchEmails();
  }, [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>All Subscription</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <th scope='col' className='px-5 py-3'>
              Email Subscription
            </th>
            <th scope='col' className='hidden sm:block px-5 py-3'>
              Data
            </th>
            <th scope='col' className='px-5 py-3'>
              Action
            </th>
          </thead>
          <tbody>
            {emails.map((item, index)=>{
              return <SubsTableItem key={index} mongoId={item._id} email={item.email}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page