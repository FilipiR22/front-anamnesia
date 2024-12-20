import CardHome from "../components/CardHome";
import Footer from "../components/Footer";
import NavForm from "../components/NavForm";

function Home() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <NavForm />
            <main className="flex flex-1 mt-104 container mx-auto ">
                <div className="box-card-class flex gap-6">
                    <CardHome imgUser='src/assets/img_user_professor1.png' titleCard='Primeira turma 2024 - campus natal zona norte' btnText="Acessar"/>
                    <CardHome imgUser='src/assets/img_user_professor2.png' titleCard='Turma Agência web escolar - campus rocas' btnText="Acessar"/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;