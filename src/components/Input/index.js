import styles from './styles.module.scss'

export function Input(props) {
    return(
        <input className={styles.input} {...props} />
    )
}