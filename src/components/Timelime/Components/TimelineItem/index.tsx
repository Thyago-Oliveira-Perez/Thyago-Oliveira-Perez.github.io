import React from "react";
import { ITimelineItemProps } from "./types";

export default function TimelineItem(props: ITimelineItemProps) {
    
    const timelineItem = props.item;

    return (
        <ol className="flex flex-col md:flex-row relative border-l
        border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-withe"/>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-2 font-semibold text-white bg-stone-900 rounded-md">
                        {timelineItem.year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900">
                        {timelineItem.title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-stone-400">
                        {timelineItem.duration}
                    </div>
                    <p className="my-2 text-base font-normal text-stone-500">
                        {timelineItem.details}
                    </p>
                </p>
            </li>
        </ol>
    )
}