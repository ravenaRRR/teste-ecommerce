import React from "react"

const CourseCard = () => {
    return (
    <div>
             <div className="card">
            <img className="card-product" src="/semfoto.jpg" alt=""/>
            <h1 className="card-title"> React Js</h1> 
       
       <h2 className="title-value"> R$ 300,00 </h2>
            <button> Adicionar</button>
            <h3 className="sub-title">No <span className="verde">Pix</span> ou em 12x no cartão</h3>
        </div>

</div>

    )
}


export default CourseCard;