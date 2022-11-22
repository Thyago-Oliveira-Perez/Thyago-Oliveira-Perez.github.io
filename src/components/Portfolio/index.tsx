import React from "react";
import { myProjects } from "../../data/portfolio"
import PortfolioItem from "./Components/PortfolioItem";
import { IProjectItem } from "./Components/PortfolioItem/types";

export default function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {myProjects.map((project: IProjectItem, key: number) => {
                    return(
                        <PortfolioItem key={key} project={project}/>
                    )
                })}
            </div>
        </div>
    )
}