import { Btn, Input } from '../../../component';

const Search = ({ click }) => {
    return (
        <div className='container grid grid-cols-1 gap-6 mx-auto shadow-lg border p-6 w-full bg-white rounded-lg sm:container sm:mx-auto sm:grid-cols-2  md:flex md:container md:mx-auto  justify-between'>
            <div className='w-full'>
                <Input typeForm={'select'} title={'Tipe Driver'} placeholder={'Pilih Tipe Driver'} />
            </div>
            <div className='w-full'>
                <Input typeForm={'date'} title={'Tanggal'} />
            </div>
            <div className='w-full'>
                <Input typeForm={'time'} title={'Waktu Jemput/Ambil'} />
            </div>
            <div className='w-full'>
                <Input typeForm={'number'} title={'Jumlah Penumpang'} />
            </div>
            <div className='flex justify-center items-end px-3 py-2 whitespace-nowrap'>
                <Btn title={'Cari Mobil'} onClick={click} />
            </div>

        </div>
    )
}
export default Search