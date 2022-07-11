import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// styles
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [experience, setExperience] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const [keywords, setKeywords] = useState([]);

  const keywordsInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data } = useFetch('http://localhost:3000/jobs', 'POST');

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData({ title, keywords, description, experience: experience + ' years' });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const kw = newKeyword.trim();

    if(kw && !keywords.includes(kw)) {
      setKeywords(prevKeywords=> [...prevKeywords, newKeyword]);
    }

    setNewKeyword('');
    keywordsInput.current.focus(); // to stay inside of the input box
  };

  // redirect the user when we get data response
  useEffect(() => {
    if(data) {
      navigate('/'); // homepage
    }
  }, [data, navigate])

  return (
    <div className='create'>
        <h2 className='page-title'>Add a New Job</h2>

        <form onSubmit={handleSubmit}>

          <label>
            <span>Job title:</span>
            <input 
              type="text"
              onChange={(e) => setTitle(e.target.value)} 
              value={title}
              required
            />
          </label>

          <label>
            <span>Job description:</span>
            <textarea 
              onChange={(e) => setDescription(e.target.value)} 
              value={description}
              required
            />
          </label>

          <label>
            <span>Job keywords:</span>
            <div className='keywords'> 
              <input 
                type="text" 
                onChange={(e) => setNewKeyword(e.target.value)}
                value={newKeyword}
                ref={keywordsInput}
              />
              <button onClick={handleAdd} className='btn'>Add</button>
            </div>
          </label>
          <p>Current keywords: {keywords.map(kw => <em>{kw}, </em>)}</p>

          <label>
            <span>Experience (years)</span>
            <input
              type="number"
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
              required
            />
          </label>

          <button className='btn'>Submit</button>

        </form>

    </div>
  )
}
