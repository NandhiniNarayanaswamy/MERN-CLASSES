function Child({ message, value, isActive, items, user }) {
    return (
        <>
            Value from Parent:<strong>{message}</strong><br />
            Number from parent:<strong>{value}</strong><br />
            isActive:<strong>{isActive ? "Active" : "Not Active"}</strong><br />
            mobiles list:{items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}<br />
            user data is:<h4>{JSON.stringify(user)}</h4>
        </>
    )
}
export default Child