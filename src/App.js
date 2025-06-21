import './App.css';
import { useState } from 'react';
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">

        {
          toDos.map((obj) => {
            return (

              <div className="todo" key={obj.id}>
                <div className="left">
                  <input
                    type="checkbox"
                    checked={obj.status}
                    onChange={(e) => {
                      setToDos(
                        toDos.map(obj2 =>
                          obj2.id === obj.id ? { ...obj2, status: e.target.checked } : obj2
                        )
                      );
                    }}
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    className="fas fa-times"
                    onClick={() => setToDos(toDos.filter(item => item.id !== obj.id))}
                  />
                </div>
              </div>)
          })}

        {toDos.map((obj) => {
          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}


      </div>
    </div>
  );
}
export default App;
