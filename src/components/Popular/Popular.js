import { useEffect , useState} from "react";
import styled from "styled-components";
import { Splide , SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import App from "../../App.css";



const apiKey = 'ffc66585c7524f4e866a06d6f47c21dd'

function Popular() {



    const [popular , setPopular ] = useState([]);

    
    useEffect (() => {
        getPopular();
    },[]);
    const getPopular = async () => {

        const check = localStorage.getItem('popularr');

        if(check) {
            setPopular(JSON.parse(check));
        } 
        else {  
        const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6`);  
        const data = await api.json();
        localStorage.setItem('popularr' , JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data.recipes);
        }       
    };

  return (
    <div>
   
    
            <div className="Wrapper">
                <h1 className="text-center">Top 20 Popular Food!</h1>
                <Splide options={{
                    perPage:4,
                    arrows:false,
                    pagination:false,
                    gap:'2rem',
                    drag:'free',


                }}>

                {popular.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <div className="Card">
                            <p className="popularP">{recipe.title}</p>
                            <img className="popularImg" src={recipe.image} alt={recipe.title} />
                            <div className="Gradient"/>
                        </div>
                        </SplideSlide>
                    );
                })}
                </Splide>
            </div>
     
    
       
    </div>
  )
}



export default Popular;