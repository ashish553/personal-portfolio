import { AOSElement } from '../../../../../ui';
import profileImg from '../../../../../assets/ashish-profile-pic.jpeg';
import 'aos/dist/aos.css';
import './About.css'


export const About = () => {
  const stackList1 = [
    {name: 'ReactJs'},
    {name: 'VueJs'},
    {name: 'NextJs'},
    {name: 'Bootstrap'},
    {name: 'SASS'},
  ]
  const stackList2 = [
    {name: 'JavaScript'},
    {name: 'CSS3'},
    {name: 'HTML5'},
    {name: 'Contentful'},
    {name: 'Git'},
  ]
   
  return (
    <section id='about' className='about'>
			<div className="width-wrapper flex-control">
        <div className="col-left">
          <AOSElement duration="900">
            <h2>About me</h2>
          </AOSElement>
          <div className="text-content">
            <AOSElement duration="900">
              <p>
              Hello! I'm Ashish, a Frontend Developer passionate about creating digital experiences that engage and inspire. With 3.5 years under my belt, my journey is defined by continuous learning and a commitment to excellence. I specialize in bringing innovative projects to life, focusing on efficiency and user-centric design. My portfolio showcases my dedication to crafting memorable web experiences. Let's collaborate to make your vision a reality.
              </p>
            </AOSElement>
            {/* <AOSElement duration="900">
              <p> 
                Since 2021 I have been assisting local business owners by creating 
                visually appealing, accessible & performant websites for their businesses, 
                providing them with a stronger online presence that will help their 
                overall success. 
              </p>
            </AOSElement> */}
             <AOSElement duration="900">
              <p>
                Here is the stack of technologies I work with:
              </p>
            </AOSElement>
          </div>
          <AOSElement duration="900">
            <div className="stack-list-container flex-control">
              <ul className="stack-list-left">
                {stackList1.map((item, index) => {
                 return ( 
                  <li className="list-item" key={ index }>
                    { item.name }
                  </li>
                 )})
                }
              </ul>
              <ul className="stack-list-right">
                {stackList2.map((item, index) => {
                  return ( 
                  <li className="list-item" key={ index }>
                    { item.name }
                  </li>
                 )})
                }
              </ul>
            </div>
          </AOSElement>
        </div>
        <div className="col-right">
          <AOSElement duration="900">
            <figure className="profile-img-container">
              <img src={ profileImg } className='profile-img' alt="Ashish profile picture"/>
            </figure>
          </AOSElement>
        </div>
			</div>
    </section>
  )
}
