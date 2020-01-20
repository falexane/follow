import React, {useState, useEffect} from "react";
import {useInfiniteScroll} from './useInfiniteScroll'
import sample from './table.json'

const App = () => {
  let limit = useInfiniteScroll()
  const [tableContent, setTableContent] = useState([])

  useEffect(() => {
    // Fetching fake data from an online API
    // fetch("https://jsonplaceholder.typicode.com/todos/")
    // .then(response => response.json())
    // .then(json => setTableContent(json))
    setTableContent(sample)
  }, [])

  return (
    <div style={{textAlign: "center"}}>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.slice(0, limit).map(content => (
              <tr key={content.id}>
                <td style={{ paddingTop: "10px" }}>{content.userId}</td>
                <td style={{ paddingTop: "10px" }}>{content.title}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App
