import styles from './page.module.css'
import { Portfolio } from './Portfolio';

export default function Home() {
    const Projects = [
        {
            title: 'Project 1',
            description: 'Description of project 1',
            date: 'Sep 01 - Nov 10',
        },
        {
            title: 'Project 2',
            description: 'Description of project 2',
            date: '',
        },
    ]

    return(
        <>
            <h1 className={styles.title}>Career Page</h1>
            <Portfolio projects={Projects} />
        </>
    );
}