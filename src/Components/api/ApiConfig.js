import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function Api() {
  const [items, setItems] = useState('')
  useEffect(() => {
    axios.get()
    .then(res => {
      (res.json())
      setItems(res)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      {/* API PARAMS
      LOCATION NAME
      SEARCH QUERY
      URL PARAMS */}
    </div>
  );
}
