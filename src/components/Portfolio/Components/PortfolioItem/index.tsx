import { IProjectItemProps } from "./types";

export default function PortfolioItem(props: IProjectItemProps) {

    const project = props.project;

    return (
        <div className="border border-stone-900 rounded-md overflow-hidden">
            <img
                src={project.imgUrl}
                alt="project image"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 mb:mb-3 font-semibold">
                    {project.title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {project.stacks.map((stack) => {
                        return (
                            <span className="inline-block px-2 py-1 font-semibold border border-stone-900 rounded-md">
                                {stack}
                            </span>
                        )
                    })}
                </p>
            </div>
        </div>
    )
}