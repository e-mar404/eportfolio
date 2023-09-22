import styles from './page.module.css'
import { Portfolio } from './Portfolio';

export default function Home() {
    const Projects = [
        {
            title: 'Beta Academy',
            date: 'Oct 2021 - Present',
            description: 'Description of project 1',
        },
        {
            title: 'Code Ninjas - Code Tutor',
            date: 'Dec 2020 - Aug 2021',
            description: 'Description of project 2',
        },
        {
            title: 'Snipe IT Python CLI',
            date: 'May 2023 - Jul 2023',
            description: 'CLI tool that makes use of the API of a ',
        },
    ]

    return(
        <>
            <h1 className={styles.title}>Career Page</h1>
            <Portfolio projects={Projects} />
        </>
    );
}