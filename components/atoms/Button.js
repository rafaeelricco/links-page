import React from 'react'
import { Button } from '@nextui-org/react'

export default function CustomButton(props) {
  const handleConfetti = () => {
    confetti({})
  }
  return (
    <div>
      <Button
        auto
        rounded
        disabled={props.disabled}
        ripple={false}
        size="lg"
        onClick={handleConfetti}
        css={{
          background: '$white',
          fontWeight: '$semibold',
          boxShadow: '$md',
          position: 'relative',
          borderRadius: '$base',
          overflow: 'visible',
          color: '$white',
          letterSpacing: '$tight',
          px: '$20',
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: '$primary',
            opacity: 1,
            borderRadius: '$base',
            transition: 'all 0.4s ease-out'
          },
          '&:hover': {
            transform: 'translateY(-5px)',
            color: '$primary',
            borderRadius: '$base',
            '&:after': {
              transform: 'scaleX(1.5) scaleY(1.6)',
              opacity: 0,
              borderRadius: '$base',
            }
          },
          '&:active': {
            transform: 'translateY(-2px)',
            borderRadius: '$base',
          }
        }}
      >
        {props.text}
      </Button>
      <script async src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    </div>
  )
}
