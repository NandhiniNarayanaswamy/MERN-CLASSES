function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white p-4 mt-10">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Shopify. All Rights Reseved</p>
                </div>
            </footer>
        </>
    )
}
export default Footer