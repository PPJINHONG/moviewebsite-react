import  { useEffect,useState } from "react";
import  { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const {id} = useParams();  
    console.log(id);
    const [loading,setloading] = useState(true)
    const [detail,setdetail] = useState([]);
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setdetail(json.data.movie);
        setloading(false);
      };
    
    console.log(detail);
    const back = detail.background_image;
    
    useEffect(() => {
        getMovie(); 
    }, []);

    return (
        <div className={styles.contain}>
         <img src={detail.background_image} className={styles.img1} />
        {loading ? <h1>loading..</h1> : 
        (<div>
        <img src={detail.medium_cover_image} className={styles.img2} />
        <p className={styles.title1}> {detail.title_long} </p>
        <p className={styles.rating}> rating : {detail.rating} </p>  
        <p className={styles.runtime}> runtime : {detail.runtime} minutes </p>
        <ul className={styles.genres}>
         
         {detail.genres.map((g) => (
           <li key={g}>{g}</li>
        ))}
      </ul>
      <p className={styles.downlink}> Download Link</p>
        <a href={detail.url} className={styles.url}>{detail.url}</a>


        </div>
        )
        
        }
      
   
     </div>




    )
}
export default Detail;