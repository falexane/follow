import React, {useEffect} from "react";
import firebase from "./database";
import { useDatabaseEntry } from "./useDatabaseEntry";

const App = () => {
  // let limit = useInfiniteScroll(10)
  let dataFromFirebase = useDatabaseEntry("customHooksExample");

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })


  return (
    <div style={{ textAlign: "center" }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {dataFromFirebase.map(content => {
            return (
              <tr key={content.number + Math.random() * 100}>
                <td style={{ paddingTop: "10px" }}>{content.name}</td>
                <td style={{ paddingTop: "10px" }}>{content.number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <button
        onClick={() => {
          let ref = firebase.database().ref("customHooksExample");
          let newPost = ref.push();
          // Pushing an object to firebase with a random number
          newPost.set({
            name: "Custom hook example",
            number: Math.floor(Math.random() * 1000)
          });
        }}
      >
        Click to push data to firebase!
      </button>
    </div>
  );
};

export default App;
