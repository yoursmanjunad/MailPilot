"use client"
import React from 'react'
import { Button } from './button'
import { getAruinkoAuthUrl } from '@/lib/ankino'

const LinkAccountButton = () => {
  return (
    <Button onClick={async ()=>{
        const authUrl = await getAruinkoAuthUrl('Google')
        window.location.href = authUrl
    }}>
        Link account
    </Button>
  )
}

export default LinkAccountButton