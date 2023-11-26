import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/pages/ComicForm.module.css';
import ComicImage from '../components/ComicImage';
import FilteredImage from '../components/FilteredImage';

function ComicForm() {
  const [search, setSearch] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  async function query(data) {
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          "Accept": "image/png",
          "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    query({ inputs: search}).then((dt) => {
      const url = URL.createObjectURL(dt);
      setImgSrc(url);
      // console.log(dt, "ok");
    }).catch((e)=>{
      console.log(e);
    });

  }
  // query({ "inputs": "Astronaut riding a horse" }).then((response) => {
  //   // Use image
  // });

  return (
    <div className={styles.mainContainer}>
      {/* <ComicImage imageUrl={imgSrc} /> */}
      <ComicImage src={imgSrc} />
      {/* <img src={imgSrc} /> */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  );
}

export default ComicForm;
