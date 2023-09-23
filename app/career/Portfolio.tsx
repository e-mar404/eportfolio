import styles from './Portfolio.module.css'

interface Project {
    title: string;
    date: string;
    description: string;
}

interface ProjectsProp {
    projects: Project[];
}

export function Portfolio(props: ProjectsProp){
    const { projects } = props;

    return(
        <>
            {projects.map((project, index) => (
                <div key={index} className={styles.project_item_container}>
                    <h2>{project.title}</h2>
                    <p>{project.date}</p>
                    <p>{project.description}</p>
                </div>  
            ))}
        </>
    );
}