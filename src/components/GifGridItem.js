import React from 'react'

// export const GifGridItem = (props) => {
//     return (
//         <div>
//             <img src={props.img.url} alt={props.img.title} />
//             <p>{props.img.title}</p>
//         </div>
//     )
// }

export const GifGridItem = ({url, title}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
