
//eg-1
// function Child({ name, isstudent }) { //destructuring
//     return (
//         <>
//             hello {name}<br />
//             {isstudent ? `${name} is a student` : `${name} is a mentor`}  
//         </>
//     )
// }
// export default Child

//eg-2
function Child({ obj }) { //destructuring
    return (
        <>
            {obj.name}
            {obj.age}
            {obj.city}
            {obj.country}
            {JSON.stringify(obj)}
        </>
    )
}
export default Child