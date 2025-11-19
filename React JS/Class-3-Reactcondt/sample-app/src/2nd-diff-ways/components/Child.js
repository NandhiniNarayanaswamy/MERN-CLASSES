//eg-1 -> another way of sending props

// function Child(props) {
//     return (
//         <>
//             {props.name}
//         </>
//     )
// }
// export default Child

//--------------normal way without spread operator
// function Child(props) {
//     return (
//         <h3>
//             {props.name} - {props.age} - {props.city}
//         </h3>
//     );
// }
//Here we manually pass each property.

// 2. Using Spread Operator
// Instead of writing each prop, you can spread the object:

// function Child(props) {
//     return (
//         <h3>
//             {props.name} - {props.age} - {props.city}
//         </h3>
//     );
// }


//eg-2 -> object has send throgh spread operator
// function Child({ name, age, city, country }) {
//     return (
//         <>
//             name is {name}
//             age is {age}
//             city is {city}
//             country is {country}
//         </>
//     )
// }
// export default Child

//eg-3 default props
function Child({ name = "krishna", children }) {  // if u don't give name in app.js it takes this name which is default props
    //children is a inbuild, u need to use only children 
    return (
        <>
            {name}  {children}
        </>
    )
}
export default Child