import { Navbar, Search } from "../component"

const Main = () => {
    return (
        <div>
            <div className="bg-emerald-50">
                <Navbar />
            </div>
            <div className="md:container md:mx-auto ">
                <Search />
            </div>
        </div>
    )
}

export default Main