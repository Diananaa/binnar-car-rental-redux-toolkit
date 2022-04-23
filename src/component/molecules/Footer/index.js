import { ICFb, ICIg, ICMail, ICTwitch, ICTwitter } from "../../../assets"

const Footer = () => {
    return (
        <footer className="mx-auto container text-sm font-light justify-between mt-[151px] mb-[100px] space-y-7 lg:flex  ">
            <div className="max-w-[268] space-y-4 ">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="font-normal space-y-4 ">
                <p>Our services</p>
                <p>Why Us</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>
            <div className="space-y-4 ">
                <p>Connect with us</p>
                <div className="flex space-x-4">
                    <img alt="footer" src={ICFb} className="w-8 h-8" />
                    <img alt="footer" src={ICIg} className="w-8 h-8" />
                    <img alt="footer" src={ICTwitter} className="w-8 h-8" />
                    <img alt="footer" src={ICMail} className="w-8 h-8" />
                    <img alt="footer" src={ICTwitch} className="w-8 h-8" />
                </div>
            </div>
            <div className="space-y-4 ">
                <p>Copyright Binar 2022</p>
                <div className="bg-blue-900 w-24 h-8"></div>
            </div>
        </footer>
    )
}

export default Footer