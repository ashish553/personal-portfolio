import logoLight from '../../../assets/as-logo-light.png'
import './Logo.css'


export const Logo = () => {

  return (
    <div className="logo-container col-left">
			<img 
        src={ logoLight }
        className="logo-img"
        alt="ashish sharma calligrahy logo" />
		</div>
  )
}

