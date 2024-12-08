import logo_awe from '../assets/logo_awe.svg'
function Footer(){
    return(
        <footer className='py-4 border-top' style={{height:'min-content'}}>
            <img src={logo_awe} alt="Imagem da Lodo da Awe"  className='mx-auto d-block'/>
        </footer>
    )
}

export default Footer