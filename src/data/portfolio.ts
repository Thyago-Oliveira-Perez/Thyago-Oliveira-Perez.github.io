import { IProjectItem } from "../components/Portfolio/Components/PortfolioItem/types";

/**
 * Array with my projects
 */
export const myProjects: IProjectItem[] =  [
    {
        title: 'NLW - Games',
        imgUrl: '/assets/nlw_project.png',
        stacks: ['React', 'React Native', 'Node', 'SQLite', 'TypeScript', 'Tailwind'],
        link: 'https://github.com/Thyago-Oliveira-Perez/NLW',
        description: ''
    },
    {
        title: 'Ransoware',
        imgUrl: '/assets/ransoware_project.jpg',
        stacks: ['Python'],
        link: 'https://github.com/Thyago-Oliveira-Perez/ransom_py',
        description: 'Project created with educational porpourse to study ransowares using python'
    }
]