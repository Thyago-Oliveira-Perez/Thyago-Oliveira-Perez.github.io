import React from "react";
import { ITimelineItem, ITimelineItemProps } from "./Components/TimelineItem/types";
import { timelineInfos } from "../../data/timeline";
import TimelineItem from "./Components/TimelineItem";

export default function Timeline() {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                {timelineInfos.map((item: ITimelineItem) => {
                    return (
                        <TimelineItem item={item} />
                    )
                })}
            </div>
        </div>
    )
}