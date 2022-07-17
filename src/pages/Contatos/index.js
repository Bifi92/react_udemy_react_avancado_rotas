import {Link} from 'react-router-dom';
function Contato() {
    return (
        <div>
            <h1>Bem vindo a pagina Contato</h1>
            <br/>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/sobre'>Sobre</Link>
        </div>
    );
}

export default Contato;
  