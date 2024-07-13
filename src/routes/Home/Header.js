import React from 'react'
import "./Header.css"

function Header() {
  return (
    <>
      <header>
        <svg width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0826 0.250488H5.91749V6.05104H21.5588C21.8902 6.05104 22.2184 6.1122 22.5247 6.231C22.8308 6.3498 23.109 6.52394 23.3433 6.74346C23.5778 6.96298 23.7636 7.22359 23.8906 7.51041C24.0174 7.79723 24.0826 8.10464 24.0826 8.4151V8.75797H30V5.79324C30 4.32321 29.3765 2.91339 28.2668 1.87392C27.1571 0.834455 25.652 0.250488 24.0826 0.250488Z" fill="#FBDF06"/>
          <path d="M5.91743 28.222H24.0826V22.4215H8.39449C7.73754 22.4215 7.10749 22.177 6.64295 21.7419C6.17841 21.3068 5.91743 20.7167 5.91743 20.1013V19.7145H0V22.6793C0 24.1494 0.623442 25.5592 1.73317 26.5986C2.8429 27.638 4.34802 28.222 5.91743 28.222Z" fill="#FBDF06"/>
          <path d="M24.0826 11.336H8.39449C7.73754 11.336 7.10749 11.0915 6.64295 10.6564C6.17841 10.2213 5.91743 9.63113 5.91743 9.01577L5.91749 6.05104L0 6.05104V11.5938C0 13.0638 0.623442 14.4736 1.73317 15.5131C2.8429 16.5526 4.34802 17.1366 5.91743 17.1366H21.6055C22.2624 17.1366 22.8925 17.381 23.3571 17.8161C23.8215 18.2512 24.0826 18.8414 24.0826 19.4568V22.4215L30 22.4215V16.8787C30 15.4087 29.3765 13.9989 28.2668 12.9594C27.157 11.92 25.652 11.336 24.0826 11.336Z" fill="#FBDF06"/>
          <path d="M11.8604 29.9919V37.7505H18.1395V29.9919H11.8604Z" fill="#FBDF06"/>
        </svg>
        <div id='header-menu'>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              company
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <ul className='navigation-list'>
            <li>
              services
            </li>
            <li>
              works
            </li>
            <li>
              contacts
            </li>
            <li>
              services
            </li>
            <div className="dropdown">
              {/* English language icon  */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3720_2670)">
              <rect width="20" height="20" rx="10" fill="#1A47B8"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M-1.02137 0H-4V3.33333L21.0052 20L24 20V16.6667L-1.02137 0Z" fill="white"/>
              <path d="M-3.00654 0L24 18.0472V20H23.0298L-4 1.93408V0H-3.00654Z" fill="#F93939"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 0H24V3.33333C24 3.33333 6.67974 14.4374 -1.33333 20H-4V16.6667L21.3333 0Z" fill="white"/>
              <path d="M24 0H23.0957L-4 18.0628V20H-3.00654L24 1.94868V0Z" fill="#F93939"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.18277 0H13.8405V6.16909H24V13.8268H13.8405V20H6.18277V13.8268H-4V6.16909H6.18277V0Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.78947 0H12.2105V7.69231H24V12.3077H12.2105V20H7.78947V12.3077H-4V7.69231H7.78947V0Z" fill="#F93939"/>
              </g>
              <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#FAFAFA"/>
              <defs>
              <clipPath id="clip0_3720_2670">
              <rect width="20" height="20" rx="10" fill="white"/>
              </clipPath>
              </defs>
            </svg>
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                english
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">romanian</a></li>
              </ul>
            </div>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header