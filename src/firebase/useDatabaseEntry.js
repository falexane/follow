import { useEffect, useState } from "react";
import firebase from "./database";

export const useDatabaseEntry = entry => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ref = firebase.database().ref(entry);
    ref.on("value", snapshot => {
      const array = [];
      // For each data in the entry
      snapshot.forEach(el => {
        // Push the object to the array
        // If you also need to store the unique key from firebase,
        // You can use array.push({ ...el.val(), key: el.key });
        array.push(el.val());
      });
      setData(array);
    });
    // Clean-up function
    return () => ref.off("value");
  }, [entry]);

  return data;
};
