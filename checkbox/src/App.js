import {useState, useReducer, memo, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import faker from 'faker';

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 }
  ];

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}));

const List = ({data = [], renderEmpty, renderItem}) => {
  return !data.length ? renderEmpty : (
    <ul>
      {data.map((item, i) => (<li key={i}>{renderItem(item)}</li>))}
    </ul>
  )
}
function App({login}) {

  const renderItem = item => (
    <div style={{width: 200}}>
      <img src={item.avatar} alt={item.name} width={50}/>
      <p>{item.name} - {item.email}</p>
    </div>
  )

  return (
    <List data={bigList}  renderItem={renderItem}/>
  );
}

export default App;
