import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import InputPrimary from "../components/InputPrimary";
import BtnPrimary from "../components/BtnPrimary";
import Title from "../components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

function Login() {
    return (
        <>
            <div className="d-flex flex-column justify-content-between root-container">
                <Header />
                <main className="row justify-content-center align-items-center" style={{ height: '100', width: '100%' }}>
                    <div className="content col-4 d-flex flex-column gap-5">
                        <Title text_h1="Olá novamente!">
                            Ainda não tem uma conta? <Link to="/" className="text-decoration-none">criar conta</Link>
                        </Title>
                        <form action="" className="d-flex flex-column gap-3">
                            <InputPrimary text_label='Primeiro, insira o seu e-mail' placeholder="exemple@exemple.com" id="endereco_email" type='email' />
                            <BtnPrimary>
                                Próximo <FontAwesomeIcon icon={faRightLong} />
                            </BtnPrimary>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Login;