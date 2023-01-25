import { useEffect, useState } from "react";
import styles from "./Body/Body.module.css"
type data = {
    titulo: string;
    avatar: string;
}

export const Body = () => {
    const [Loading, setOnLoading] = useState<boolean>(false)
    const [movies,setmovies] = useState<data[]>([])
    useEffect(()=> {handleClick},[]);
    const handleClick = async () => {
    try{
        setOnLoading(true)
        let response = await fetch("https://api.b7web.com.br/cinema/");
        let data = await response.json();
        setOnLoading(false)
        setmovies(data);
    }catch{alert("error")}};

    return(
        <>
        <h3 className={styles.totalMovies}>
            {Loading &&
                <div><h3>Carregando...</h3></div>
            }Total de filmes: {movies.length}</h3>
        <div>
            <button onClick={handleClick}>Filmes</button>
            </div>
        <div className={styles.body}>
            {movies.map((item,index)=>(
                <div className={styles.field} key={index}>
                    <div className={styles.areaMovies}>
                            <h2>{item.titulo}</h2><br />
                            <img width={150} src={item.avatar}/>
                    </div>     
                </div>))};
        </div>
        </>);
}