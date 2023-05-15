import styles from './tentang.module.css';

function Tentang(){
    return(<div className="container-fluid w-100" style={{height:"60vh",marginTop:"50px",marginBottom:"50px"}}>
        <div className='row w-100 h-100 justify-content-center'>
            <div className='col-6'  style={{overflow:"hidden"}}>
                <img
                src="https://drive.google.com/uc?export=view&id=1Aq-ej8c_Yoahh77o1IDzAzBWOjaRGYve"
                height={"100%"}
                width={"100%"}
                >
                </img>
            </div>
            <div className='col-6 h-100' id={styles.title}>
                <h1>
                    Tentang Kami
                </h1>
                <p>
                D3 Software Solution adalah penyedia layanan jasa pembuatan produk digital. Layanan kami mencakup Website Apps, Mobile Apps, Software, hingga Design. Kami membantu semua kalangan, mulai dari personal hingga Big Company. Bersama dengan kami membuat usaha anda menjadi digital.
                </p>
            </div>
        </div>
</div>)
}

export default Tentang;