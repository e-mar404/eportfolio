import styles from './page.module.css'
import { Portfolio } from './Portfolio';

export default function Home() {
    const Projects = [
        {
            title: 'Beta Academy',
            date: 'Oct 2021 - Present',
            description: 'In my role at the school\'s IT department, I manage Windows and Chrome systems, ensuring their security and performance. I handle software and hardware setup, maintain user accounts for data security, and provide helpdesk support for technical issues. Additionally, I design scalable tech solutions and use PowerShell scripts for efficient app deployment. REST APIs are leveraged to automate tasks, boosting productivity.',
        },
        {
            title: 'Code Ninjas - Code Tutor',
            date: 'Dec 2020 - Aug 2021',
            description: ' I organized and delivered engaging coding lessons in JavaScript and Python, fostering a fun and interactive learning environment.',
        },
        {
            title: 'Snipe IT Python CLI',
            date: 'May 2023 - Jul 2023',
            description: 'CLI tool that makes use of the API of a Asset Manager software to add bulk actions that aren\'t native to the software itself.',
        },
    ]

    return(
        <>
            <h1 className={styles.title}>Career Page</h1>
            <div className={styles.portfolio_container}>
                <Portfolio projects={Projects} />
            </div>
        </>
    );
}