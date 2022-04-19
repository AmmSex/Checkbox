import {useState, useReducer, memo} from 'react'
import logo from './logo.svg';
import './App.css';


const Cat = ({ name , meoy = f => f}) => {
  console.log(`rendering ${name}`);
  return <p>{name}</p>;
  };

  const PureCat = memo(Cat, (prevProps, nextProps) => prevProps.name === nextProps.name)

function App() {
  // const [checked, setCheked] = useState(false)

  // const toogle = () => {setCheked(checked => !checked)}

  // const [value, setValue] = useReducer((value, item) => value+item, 0)

  // const firstUser={
  //   id: "0391-3233-3201",
  //   firstName: "Bill",
  //   lastName: "Wilson",
  //   city: "Missoula",
  //   state: "Montana",
  //   email: "bwilson@mtnwilsons.com",
  //   admin: false
  // }

  // const [user, setUser] = useState(firstUser)

  // const [user, setUser] = useReducer((user, newValue) => ({...user, ...newValue}), firstUser)
  // const [mas, setMas] = useState(['1', '2', '3'])

  return (
    
    <div className="App">
        {/* <input type='checkbox' value={checked} onChange={toogle}/>
        {checked ? 'checked' : 'no cheked' } */}
      {/* <h1 onClick={() => setValue(30)}>{value}</h1> */}
        {/* <h1>{user.firstName} {user.lastName} - {user.admin ? 'Admin' : 'User'}</h1>
        <p>{user.email}</p>
        <p>Location: {user.city} {user.state}</p>
        <button onClick={() => setUser({admin: true})}>Make Admin</button> */}

        {/* {mas.map((el, i) => <PureCat key={i} name={el} meoy={name => console.log(`${name}`)}/>)}

        <button onClick={() => setMas([...mas, prompt('Введите число кота')])} >Add a cat</button> */}

    </div>
  );
}

export default App;






import {useState, useReducer, memo, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';

const loadJSON = key => key && JSON.parse(localStorage.getItem(key))
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data))

function App({login}) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(!login) return
    setLoading(true)
    fetch(`https://api.github.com/users/${login}`)
    .then(data => data.json())
    .then(setData)
    .then(setLoading(false))
    .catch(setError)
  },[login])

  if(loading) return <h1>loading...</h1>
  if(error) return <h1>{JSON.stringify(error, null, 2)}</h1>
  if(!data) return null
 
  return (
    <div className="App">
      <img src={data.avatar_url} alt={data.login} style={{width: 200}}/>
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}


