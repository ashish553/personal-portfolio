import './Footer.css'
import { AOSElement, Logo } from '../../components';

export const Footer = () => {
  return (
    <footer id="main-footer">
      <AOSElement duration="900">
        <div className="width-wrapper grid-control">
          <div className="logo-container col-left">
            <a href="/" aria-label="home">
              <Logo />
            </a>
          </div>
          <p className="copyright">
            ©2024 Made by <a href="/">Ashish Sharma</a>.
          </p>
        </div>
      </AOSElement>
    </footer>
  )
}
