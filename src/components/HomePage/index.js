import { Introduction } from '../Introduction'
import { Signup } from '../Signup'
import styles from './styles.module.scss'

export function HomePage() {
    return(
        <main className={styles.container}>
            <Introduction />
            <Signup />
        </main>
    )
}