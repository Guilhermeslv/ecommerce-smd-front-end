
import "../styles/homepage.css"
import { Header } from "../components/Header/"
import Glide from 'react-glidejs';
import { Fragment } from "react";

export function Homepage() {
    return (
        <div id="home">
           <Header 
                title="Ecommerce SMD"
           />
           <section>

           </section>
           <Glide
            type = "carousel"
            startAt = {0}
            perView = {3}
           >
               <Fragment>
                   <img src="https://comunhao.com.br/wp-content/uploads/2018/02/Xaropinho-1-e1519213937248.jpg" alt="" />
               </Fragment>
               <Fragment>
               <img src="https://comunhao.com.br/wp-content/uploads/2018/02/Xaropinho-1-e1519213937248.jpg" alt="" />
               </Fragment>
               <Fragment>
               <img src="https://comunhao.com.br/wp-content/uploads/2018/02/Xaropinho-1-e1519213937248.jpg" alt="" />
               </Fragment>
           </Glide> 
        </div>
    );
}