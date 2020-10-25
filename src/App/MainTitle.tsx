import React from 'react'

const MainTitle: React.FC<any> = () => {
  return (
    <h1 style={{ margin: 100, fontSize: 66, textAlign: 'center' }}>
      <svg
        width='168'
        viewBox='0 0 1688 1368'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M700 284H988V1356C988 1362.63 982.627 1368 976 1368H712C705.373 1368 700 1362.63 700 1356V284Z'
          fill='url(#paint0_linear)'
        />
        <path
          d='M0 288C0 128.942 128.942 0 288 0H1688C1688 159.058 1559.06 288 1400 288H0Z'
          fill='url(#paint1_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='715.5'
            y1='297.5'
            x2='844'
            y2='1368'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#065AD4' />
            <stop offset='1' stop-color='#328BFF' />
          </linearGradient>
          <linearGradient
            id='paint1_linear'
            x1='-2.51531e-05'
            y1='288'
            x2='1688'
            y2='-0.000104698'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#0457D1' />
            <stop offset='0.507898' stop-color='#3286F3' />
            <stop offset='1' stop-color='#0357CF' />
          </linearGradient>
        </defs>
      </svg>

      <div>Toft Design</div>
    </h1>
  )
}

export default MainTitle
