import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialMedia.css'

/* Icons */
const gitHub = <FontAwesomeIcon icon={ faGithub } />
const linkedIn = <FontAwesomeIcon icon={ faLinkedin } />
const instagram = <FontAwesomeIcon icon={ faInstagram } />
const email = <FontAwesomeIcon icon={ faEnvelope } />

export const SocialMedia = () => {
  const socialLinks = [
    {title:'GitHub', name: gitHub, url: 'https://github.com/ashish553'},
    {title:'LinkedIn', name: linkedIn, url: 'https://www.linkedin.com/in/ashish-sharma-8b20ba171/'},
  ]

  return (
    <ul className="social-media-wrapper flex-control">
      { socialLinks.map((item, index) => {
        return (
          <li className="social-media-item" key={ index }>
            <a 
              className="social-media-link" 
              href={ item.url } 
              target="_blank"
              aria-label={ item.title }>
              { item.name }
            </a>
          </li>
        )
      })}
    </ul>
  )
}
