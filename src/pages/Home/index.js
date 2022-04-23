import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Footer, Jumbotron, Navbar, Search } from "../../component";
import { getCars } from "../../redux/features/Cars/carSlice";

const Home = () => {
    const [listCar, setListCar] = useState([]);
    const [isClickSearch, setIsClickSearch] = useState(false)
    const dispatch = useDispatch()

    const {cars, data} = useSelector((state)=>state.cars)
    
    useEffect(()=>{
        dispatch(getCars())
    }, [dispatch])

    const reqData = async () => {
        setListCar(cars)
        setIsClickSearch(!isClickSearch);
    }

    return (
        <>
            <div className="bg-emerald-50">
                <Navbar />
                <Jumbotron />
            </div>
            <div className="z-10 relative container mx-auto -top-16">
                <Search click={reqData} />
            </div>
            {
                isClickSearch ? (
                    <div className="md:container md:mx-auto relative -mt-10">
                        <div className="grid grid-cols-1 gap-6 container mx-auto sm:grid-cols-2 md:grid-cols-3 ">
                            <Card listData={listCar} dataDetail={data} />
                        </div>
                    </div>
                ) : null
            }

            <Footer />
        </>
    )
}
export default Home

