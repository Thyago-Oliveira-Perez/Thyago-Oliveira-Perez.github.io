import React from "react";

export default function Intro() {
    return (
        <div className="
            flex 
            flex-col
            items-center
            justify-center
            text-center
            pt-20
            pb-6
            ">
            <h1 className="
                text-4xl md:text-7xl
                mb-1 md:mb-3 
                font-bold
            ">Thyago</h1>
            <p className="
                text-base md:text-xl 
                mb-3 
                font-medium
                ">
                Software Engeneer Academic {"&"} Full Stack Developer
            </p>
            <p className="
                text-sm 
                max-w-xl 
                mb-6 
                font-bold
                ">
                I'm a full-stack developer and cyber security student tryning to help people of all different areas and in many different ways. 
                All my projects are built with the porpouse of learn something, increse my experience, and usually with trying to solve real problems. 
                I save my projects in{" "}
                <a
    	            href="https://github.com/Thyago-Oliveira-Perez"
                    target="_blank"
                    className="
                        text-cyan-600 
                        hover:underline
                        underline-offset-2
                        decoration-2
                        decoration-red-600
                        "
                    rel="noreferrer noopener"
                >
                    Github
                </a>
                {" "}
                to mantain organized my projects.
            </p>
        </div>
    )
}