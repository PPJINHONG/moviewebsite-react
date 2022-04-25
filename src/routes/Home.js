import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styles from "./Home.module.css";

function Home() { 
    const [loading,setloading] = useState(true)
    const [movies1,setmovies]=useState([]); 
    const getmovie = async () => {
        const json = await (
          await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
          )
        ).json();
        setmovies(json.data.movies);
        setloading(false);
      };
    useEffect(() => {
        getmovie();
    }, []);
    console.log(movies1);

    //    useEffect(()=>{
    //     fetch(
    //         'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    //     )
    //     .then((response) => response.json())
    //     .then((json)=>{
    //         setmovies(json.data.movies);    
    //         setloading(false);
    //     });
    // },[]); 옛날방식

  return (
    <div>
       <div className={styles.head}><p>movie website</p></div>
      {loading ? <h1>loading..</h1> : 
      (
        <div className={styles.container}>
        <div className={styles.movies}>
            {movies1.map((mo)=>
            <Movie 
              id={mo.id}
              key={mo.id}
              coverImg={mo.medium_cover_image}
              title={mo.title}
              summary={mo.summary}
              genres={mo.genres}
              year={mo.year}
            />

            )}
        </div>
       </div>
      )
      
      }
    
 
   </div>
   
   )
}

export default Home;
