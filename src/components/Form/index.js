import { useState } from 'react';
import { Input } from '../Input'
import styles from './styles.module.scss'

export function Form() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function envioForm(evento) {
        evento.preventDefault();
        console.log('CADASTRAR USUÁRIO');
        console.log({ nome, sobrenome, email, senha });
    }

    return(
        <form onSubmit={envioForm} className={styles.container}>
            <Input
                value={nome}
                onChange={(evento) => setNome(evento.target.value)}
                placeholder="Nome"
                required
            />
            <Input
                value={sobrenome}
                onChange={(evento) => setSobrenome(evento.target.value)}
                placeholder="Sobrenome"
                required
            />
            <Input
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                placeholder="E-mail"
                type="email"
                required
            />
            <Input
                value={senha}
                onChange={(evento) => setSenha(evento.target.value)}
                placeholder="Senha"
                type="password"
                required
            />
            <button type="submit" className={styles.button}>Resgatar meu teste grátis</button>
            <p>Ao clicar no botão você concorda com nossos <a href='#'>Termos e Serviços</a></p>
        </form>
    )
}