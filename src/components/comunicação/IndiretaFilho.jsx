import React from "react";


export default (props) => {

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function(ev){
                    props.quandoClicar("João", 53, true)
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}