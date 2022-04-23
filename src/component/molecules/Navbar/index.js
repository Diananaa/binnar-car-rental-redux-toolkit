import { Btn } from "../.."

const Navbar = () => {
    return (
        <header className="md:container md:mx-auto pt-6 flex justify-between flex-row mb-[37px]">
            <div>
                <div className="bg-blue-900 w-24 h-8"></div>
            </div>
            <div className="flex flex-row space-x-8 ">
                <div>Our Services</div>
                <div>Why Us</div>
                <div>Testimonial</div>
                <div>FAQ</div>
                <div><Btn title={'Register'}/></div>    
            </div>
        </header>
    )
}

export default Navbar