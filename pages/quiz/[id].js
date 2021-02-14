import React from 'react';

export default function QuizDaGaleraPage(){
    return(
        <div>
            Estou só testando
        </div>
    );
}

export async function getServerSideProps(context){
console.log('Infos qu o next dá para nós ', context.query.id);


    return{
        props: {},
    };
}