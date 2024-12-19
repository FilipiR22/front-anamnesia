import Footer from "../components/Footer";
import NavForm from "../components/NavForm";

function Home() {
    return (
        <div className="flex flex-col justify-between min-h-screen root-container">
            <NavForm />
            <main className="flex justify-center flex-1 mt-104">
                <div className="content-408 w-full max-w-md flex flex-col gap-12">

                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;