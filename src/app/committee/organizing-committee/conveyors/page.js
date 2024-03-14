import ConveyerCard from '@/app/components/ConveyerCard'
import '@/app/committee/organizing-committee/conveyors/conveyor.css'

const page = () => {
    return (
        <div className="overflow-x-hidden pb-10 backdrop-blur-sm bg-[#222831]">
            <div className='flex justify-center items-center py-5'>
                <h1 className='title font-black text-white text-4xl'>Conveyors</h1>
            </div>
            <div className='flex w-screen justify-evenly items-center my-5 flex-col sm:flex-row sm:h-auto h-screen'>
                <ConveyerCard img={'/images/rakhimamimg.jpeg'} name={'Dr. Rakhi D. Wajgi'} des={'HOD'} dep={'Computer Technology'} />
                <ConveyerCard img={'/images/lalitSirImg.jpeg'} name={'Dr. Lalit Damahe'} des={'HOD'} dep={'Computer Science and Engineering'} />
            </div>
        </div>
    )
}

export default page