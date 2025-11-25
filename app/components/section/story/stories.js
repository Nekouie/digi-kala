import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {fetchStory} from "@/app/redux/features/stories/storiesSlice"
import {useEffect} from "react";
import {Skeleton} from "@mui/material";

const Stories = () => {

    const dispatch = useDispatch();
    const {stories, loading, error} = useSelector((state) => state.stories);

    useEffect(() => {
        dispatch(fetchStory());
    }, [dispatch])
    return (
        <>
            {error ? (<p className="mx-auto">خطا : {error}</p>) : null}
            {loading ? (<div
                className="w-full h-60 flex overflow-x-scroll  relative flex-row items-start lg:justify-between justify-start pt-20 lg:px-20 px-6 text-center">
                {Array.from({length: 10}).map((_, index) => (
                    <Skeleton className="min-w-20 min-h-20 me-5"
                        key={index}
                        variant='circular'
                        width={70}
                        height={70}
                        animation='wave'
                    />
                ))}
            </div>) : (<ul
                className="w-full h-full flex justify-start mt-4 scroll-smooth snap-mandatory">
                {stories.map((story) => (

                    <li key={story.id}
                         className="min-w-20 cursor-pointer w-20 ml-5 snap-start snap-always scroll-smooth flex flex-col items-center justify-start">
                        <Image className="w-20 mb-2  rounded-full border-3 p-1 border-pink-800"
                               src={story.image} alt={story.title} width={50} height={50}/>
                        <p className='text-[0.8rem] mt-2 font-light'>{story.title}</p>
                    </li>
                ))}</ul>)}

        </>
    )
}

export default Stories