import styles from './styles.module.scss'

export function Introduction() {
    return(
        <section className={styles.intro}>
            <h1>Aprenda a desenvolver<br/> assistindo profissionais</h1>
            <p>Veja como desenvolvedores experientes resolvem problemas em tempo real. Assistir a tutoriais com script é ótimo, mas entender como os desenvolvedores pensam é melhor!</p>
        </section>
    )
}