import ExperienceList from './ExperienceList';
import { Button } from '../../../../../ui';
import './Experience.css'

export const Experience = () => {

  return (
    <section id='work' className='projects'>
			<div className="width-wrapper">
        <div className="projects-container grid-control">
          <div className="col-left flex-control">
            <ExperienceList />
          </div>
          <div className="col-right">
            <h2>Professional <br />Experience</h2>
            <p>An insight into my professional journey.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

