import Stories from './stories';

const Story = () => {
    return (
        <>
        <div className="bg-white w-full h-[10rem] flex items-center justify-center">
            <div className="flex items-center justify-center w-10/12 relative -z-0">
                <Stories />
                <div className="flex items-center justify-center cursor-pointer absolute left-3 bg-white py-2 px-4 rounded-full border border-gray-300 ">
                    <p>»</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Story