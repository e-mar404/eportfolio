import Image from 'next/image';
import styles from './page.module.css'
import fun_headshot from './fun_headshot.jpg'

export default function Home() {
  return (
    <main className={styles.background}>
      <div className={styles.profile_container}>
        <Image className={styles.profile_pic} src={fun_headshot} alt='Profile Picture'/>
          <p className={styles.title}>Hello, my name is Emilio Marin</p>
          <p className={styles.text}>I am an aspiring software developer studying Computer Science at the University of Houston. I have a strong commitment to continous self-improvement and genuine enthusiasm for acquiring fresh knowledge and skills.</p>
      </div>
    </main>
  )
}
