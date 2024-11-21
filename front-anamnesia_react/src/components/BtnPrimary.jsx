import '../styles/btnPrimary.css';
function BtnPrimary({children}){
    return <button className='fw-semibold px-4 py-2 ms-auto d-flex align-items-center gap-2'>{children}</button>
}

export default BtnPrimary