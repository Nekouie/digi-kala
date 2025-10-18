"use client"

import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchServices} from "@/app/redux/features/services/servicesSlice";
import {Skeleton} from "@mui/material";

const ServiceCategories = () => {

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    return (
        <>
            {error? (<div className="p-10">خطا : {error}</div>) : (<div className="w-full flex justify-start items-start ">
                {loading ? (<div
                    className="w-full h-30 flex overflow-hidden -mt-5  relative flex-row items-center lg:justify-between justify-start  lg:px-20 px-6     text-center">
                    {Array.from({length: 10}).map((_, index) => (
                        <Skeleton className="min-w-15 min-h-10 me-5"
                            key={index}
                            variant='circular'
                            width={70}
                            height={60}
                            animation='wave'
                        />
                    ))}
                </div>) : (

                    <div
                        className="w-full h-30 flex overflow-y-hidden overflow-x-auto list-container relative flex-row items-start lg:justify-between justify-start  lg:px-20 text-center">
                        {data.map((data) => (
                            <div key={data.id}
                                 className="flex hover:cursor-pointer flex-col items-center justify-center w-19 me-5">
                                <Image width={45} height={45} className="min-w-15 mb-2"
                                       src={data.image} alt={data.title}/>
                                <p>{data.title}</p>
                            </div>
                        ))}
                        <div
                            className="flex hover:cursor-pointer  flex-col items-center justify-center w-19 me-2">
                            <div
                                className="w-15 h-15  min-w-15 min-h-15 py-5 mb-2 bg-gray-400 rounded-full flex flex-row items-center justify-center">
                                ...
                            </div>
                            <p>بیشتر</p>
                        </div>
                    </div>

                )}
            </div>)}

        </>
    )
}
export default ServiceCategories;