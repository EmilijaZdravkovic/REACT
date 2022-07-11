import { useFetch } from '../../hooks/useFetch';

// styles
import './Home.css';

// components
import JobList  from '../../components/JobList';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/jobs');

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <JobList jobs={data} />}
    </div>
  )
}
