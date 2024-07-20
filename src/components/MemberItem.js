import React from 'react'
import "./MemberItem.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'

function MemberItem({member}) {
    const Icon = (logoType) => {
        function socialMediaIcon (logoType) {
            switch (logoType) {
                case "facebook":
                    return (
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_536_5115)">
                            <rect x="0.00012207" width="36" height="36" rx="18" fill="white" fill-opacity="0.1"/>
                            <rect x="0.00012207" width="36" height="36" rx="18" fill="url(#paint0_radial_536_5115)" fill-opacity="0.1"/>
                            <rect x="0.500122" y="0.5" width="35" height="35" rx="17.5" stroke="white" stroke-opacity="0.05"/>
                            <path d="M21.6989 10.0033L19.78 10C17.6243 10 16.2311 11.5455 16.2311 13.9376V15.7531H14.3018C14.1351 15.7531 14.0001 15.8993 14.0001 16.0795V18.71C14.0001 18.8903 14.1353 19.0363 14.3018 19.0363H16.2311V25.6738C16.2311 25.854 16.3661 26 16.5329 26H19.0501C19.2168 26 19.3518 25.8539 19.3518 25.6738V19.0363H21.6076C21.7743 19.0363 21.9093 18.8903 21.9093 18.71L21.9102 16.0795C21.9102 15.993 21.8784 15.9101 21.8219 15.8488C21.7654 15.7876 21.6884 15.7531 21.6084 15.7531H19.3518V14.2141C19.3518 13.4744 19.5148 13.0989 20.4059 13.0989L21.6986 13.0984C21.8651 13.0984 22.0001 12.9522 22.0001 12.7721V10.3296C22.0001 10.1496 21.8653 10.0037 21.6989 10.0033Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_b_536_5115" x="-19.9999" y="-20" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_536_5115"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_536_5115" result="shape"/>
                            </filter>
                            <radialGradient id="paint0_radial_536_5115" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.0001 36) rotate(-90) scale(36 17.9113)">
                            <stop stop-color="#FBDF06"/>
                            <stop offset="1" stop-color="#FBDF06" stop-opacity="0"/>
                            </radialGradient>
                            </defs>
                        </svg>
                    )
                
                case "twitter":
                    return (
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.0001 1.65642C17.3376 1.93751 16.6268 2.12814 15.8799 2.21324C16.6425 1.77597 17.2263 1.08239 17.5029 0.258473C16.7876 0.663419 15.998 0.957461 15.1566 1.11686C14.4829 0.428658 13.5246 0 12.4616 0C10.4224 0 8.76893 1.5832 8.76893 3.53473C8.76893 3.81151 8.80155 4.08184 8.86455 4.34034C5.79613 4.19277 3.07527 2.78514 1.25424 0.646183C0.935918 1.16747 0.754829 1.77487 0.754829 2.42325C0.754829 3.64997 1.40721 4.73236 2.39704 5.36562C1.79189 5.34624 1.22274 5.18684 0.724476 4.92189V4.96605C0.724476 6.67849 1.99774 8.10766 3.68604 8.43294C3.37672 8.51264 3.05054 8.5568 2.7131 8.5568C2.47466 8.5568 2.24407 8.53418 2.01798 8.49109C2.48813 9.89659 3.85139 10.9187 5.4666 10.9467C4.20345 11.8944 2.61074 12.4577 0.880829 12.4577C0.58277 12.4577 0.289181 12.4405 0.00012207 12.4093C1.63445 13.4141 3.57472 14 5.66007 14C12.4527 14 16.1656 8.61281 16.1656 3.94077L16.1532 3.48305C16.8787 2.98759 17.5063 2.3651 18.0001 1.65642Z" fill="white"/>
                        </svg>
                    )

                default:
                    return (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00012207 1.68116C0.00012207 0.753079 0.753201 0 1.68128 0C2.60877 0 3.36185 0.753079 3.36244 1.68116C3.36244 2.60924 2.60936 3.37806 1.68128 3.37806C0.753201 3.37806 0.00012207 2.60924 0.00012207 1.68116Z" fill="white"/>
                            <path d="M14.0001 13.9994V8.86494C14.0001 6.35312 13.4593 4.41821 10.5228 4.41821C9.11115 4.41821 8.16382 5.19287 7.77708 5.92729H7.73624V4.65271H4.952V13.9994H7.85116V9.37127C7.85116 8.15269 8.08216 6.97437 9.59124 6.97437C11.0781 6.97437 11.1003 8.36503 11.1003 9.44944V14L14.0001 13.9994Z" fill="white"/>
                            <path d="M0.231133 4.6532H3.13378V13.9999H0.231133V4.6532Z" fill="white"/>
                        </svg>

                    )
            }
        }
        return (
            <div className='member-social-media-icon'>
                {socialMediaIcon(logoType)}
            </div>
        )
        
    }
  return (
    <div className='member-item'>
        <div className='member-footer'>
            <div className='member-footer-title'>
                <p className='member-foooter-member-name'>
                    {member.fullName}
                </p>

                <p className='member-footer-member-job'>
                    {member.job}
                </p>
            </div>
        </div>

        <div className='member-social'>
            {Icon("facebook")}
            {Icon("twitter")}
            {Icon("linkedin")}
        </div>

        <LazyLoadImage wrapperClassName='member-image' src={member.imageSrc} alt={member.fullName}/>
    </div>
  )
}

export default MemberItem