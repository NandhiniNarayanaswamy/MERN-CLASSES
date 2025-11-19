function App() {
    //object
    const person = {
        name: "manoj",
        age: 90,
        city: "mysur"
    }
    //object destructuring 
    const { name, age, city } = person

    //array
    const mobiles = ["oppo", "vivo", "samsung", "infinix"]
    //array destructuring
    const [one, two, three, four] = mobiles

    return (
        <>
            {name} who is {age} from {city} {/* object destructuring */}
            {one}<br />
            {two}<br />
            {three}<br />
            {four}<br />
        </>
    )
}
export default App