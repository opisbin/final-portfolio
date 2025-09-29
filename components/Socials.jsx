import {BiLogoFacebook, BiLogoInstagramAlt, BiLogoDribbble, BiLogoLinkedin} from 'react-icons/bi'



const socials = [
  {
    icon: <BiLogoFacebook />,
    path: 'https://www.facebook.com'
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: 'https://www.instagram.com'
  },
  {
    icon: <BiLogoDribbble />,
    path: 'https://www.dribbble.com'
  },
  {
    icon: <BiLogoLinkedin />,
    path: 'https://www.linkedin.com'
  }
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>{item.icon}</div>
      )})}
    </div>
  )
}

export default Socials