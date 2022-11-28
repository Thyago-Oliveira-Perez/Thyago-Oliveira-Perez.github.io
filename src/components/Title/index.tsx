import React from "react";
import { ITitleProps } from "./types";

export default function Title(props: ITitleProps) {
    return (
        <h1 
            className="text-2x-1 font-bold underline
            underline-offset-8 decoration-2 mb-5 text-stone-900 dark:text-white"
            >
            {props.text}
        </h1>
    )
}