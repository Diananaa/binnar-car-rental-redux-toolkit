const Btn = ({ title, onClick}) => {
    return (
        <button onClick={onClick} className="bg-[#5CB85F] text-sm text-white px-3 py-1 w-full">{title}</button>
    )
}
export default Btn