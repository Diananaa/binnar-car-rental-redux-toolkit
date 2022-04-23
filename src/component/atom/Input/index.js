const Input = ({ typeForm, title, placeholder }) => {
    switch (typeForm) {
        case 'number':
            return (
                <label>
                    <p className="text-xs font-light mb-2">{title}</p>
                    <input className="border text-xs w-full py-2 px-4 min-w-min" type="number"></input>
                </label>
            )
        case 'time':
            return (
                <label>
                    <p className="text-xs font-light mb-2">{title}</p>
                    <input className="border text-xs w-full py-2 px-4" type="time"></input>
                </label>
            )
        case 'date':
            return (
                <label>
                    <p className="text-xs font-light mb-2">{title}</p>
                    <input className="border text-xs w-full py-2 px-4" type="date"></input>
                </label>
            )
        case 'select':
            return (
                <label >
                    <p className="text-xs font-light mb-2">{title}</p>
                    <select className="border text-xs w-full py-2 px-4">
                        <option value="grapefruit">Dengan Sopir</option>
                        <option value="lime">Tanpa Sopir</option>
                    </select>
                </label>
            )
        default:
            return (
                <input className="border text-xs w-full py-2 px-4" type="text" name="name" placeholder={placeholder} />
            )
    }

}

export default Input