import { Form } from '../Form'
import { TryFree } from '../TryFree'
import styles from './styles.module.scss'

export function Signup() {
    return(
        <section className={styles.signup}>
            <TryFree />
            <Form />
        </section>
    )
}