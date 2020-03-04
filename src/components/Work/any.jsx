import React from 'react';

class Any extends React.Component {
    render(){
        function any(param) {
            console.log("param: ",param)
        }
        return(
            <><h1 onClick={() => any(this)}>aaaaaaa</h1></>
        )        
    }
    
}

export default Any;