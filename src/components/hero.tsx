import { useState,useEffect } from "react";
import axios from "axios";

function Hero() {
    const [quote, setQuote] = useState('Loading...')
    const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness'
    const apiKey = 'G+iMakOXCvnF4un9ns1/cA==pQwnDdYnmVBCIXeP'

    // if you leave [] it will only run once
    // If you put a usestate var it will continue to run

    // you can not use await in this function. WE have to use .then
    useEffect(() => {
        axios.get(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        }).then((res)=> {
            setQuote(res.data[0].quote)
        })
    }, [])
    // you can only have one parent emelent in the return
return (
<section className="hero">

    <div className="hero-text">
        <h4>Software Developer</h4>
        <p>Code the world...</p>
        <p className="text-center">{quote}</p>
    
    </div>
    <div className="img"></div>
   
</section>
)

}

export default Hero;