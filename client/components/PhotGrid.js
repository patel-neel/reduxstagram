import React from 'react';
import { Link } from 'react-router';

const PhotoGrid = React.createClass({
    render(){
        return(
           <div className='photo-grid'>
               <pre>
                   {JSON.stringify(this.props.posts,null,' ')}
               </pre>
           </div>
        )
    }
})

export default PhotoGrid