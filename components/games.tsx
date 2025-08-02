'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'

function Games() {
  const [showMoodModal, setShowMoodModal] = useState(false)
  return (
    <>
    <Dialog open={showMoodModal} onOpenChange={setShowMoodModal}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>How are you feeling?</DialogTitle>
            <DialogDescription >
              Move the slider to track your current mood
            </DialogDescription>
          
        </DialogHeader>

      </DialogContent>
    </Dialog>
    </>
  )
}

export default Games