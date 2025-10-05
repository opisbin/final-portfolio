import {BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoGithub} from 'react-icons/bi'



const socials = [
  {
    icon: <BiLogoFacebook />,
    path: 'https://www.facebook.com/meherab.hossain69'
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: 'https://www.instagram.com/meh_opi/'
  },
  {
    icon: <BiLogoGithub />,
    path: 'https://github.com/opisbin'
  },
  {
    icon: <BiLogoLinkedin />,
    path: 'https://www.linkedin.com/in/meherabh/'
  }
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a 
            key={index} 
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Socials