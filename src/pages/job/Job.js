import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';


// styles
import './Job.css';

export default function Job() {
  const { id } = useParams();
  const url = 'http://localhost:3000/jobs/' + id;
  const { error, isPending, data: job } = useFetch(url);
  

  return (
    <div className='job'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {job && (
        <div>
          <h2 className='page-title'>{job.title}</h2>
          <p>Experience to have {job.experience} </p>
          <ul>
            {job.keywords.map(keyword => <li key={keyword}> {keyword} </li>)}
          </ul>
          <p className='description'>{job.description}</p>
        </div>
      )}
    </div>
  )
}
