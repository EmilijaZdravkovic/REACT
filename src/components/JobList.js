import { Link } from 'react-router-dom';


// styles
import './JobList.css';

export default function JobList({ jobs }) {
  

  if(jobs.length === 0) {
    return <div className='error'>No jobs to load...</div>
  }

  return ( //prikaz u slucaju da imamo poslove
    <div className='job-list'>
        {jobs.map(job => (
            <div key={job.id} className='card'>
                <h3>{job.title}</h3>
                <p>{job.experience} of experience to have</p>
                <div>{job.description.substring(0, 25)}...</div>
            {/*link ka pojedinacnom poslu*/}
                <Link to={`/jobs/${job.id}`}>View</Link>
            </div>
        ))}
    </div>
  )
}
