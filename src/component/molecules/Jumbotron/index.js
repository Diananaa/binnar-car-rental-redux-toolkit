import { CarJumbotron } from "../../../assets"

const Jumbotron = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:pl-8 md:mb-20 flex justify-center flex-col">
                <p className="font-bold text-4xl mb-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                <p className="text-sm font-light">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </div>
            <div>
                <div></div>
                <div>
                    <img src={CarJumbotron} className="w-full h-full" alt="jumbotron" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron