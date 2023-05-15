import styles from './hero.module.css';

function Hero(){
    return(<div className="container-fluid w-100" style={{height:"660px",background:"rgba(0, 200, 205,0.6)"}}>
    <div className="row w-100 h-100">
        <div className="col-6 h-100 d-flex justify-content-center align-items-center">
            <div id={styles.divframe}>
                <h1>
                    Digitalkan <span style={{color:"#0963B7",wordBreak:"break-word"}}> Bisnis </span>Anda Bersama Kami
                </h1>
                <p>
                    D3 Software Solution siap melayani kebutuhan digital untuk start up hingga bisnis perusahaan anda.
                </p>
                <div className="row">
                    <div className='col-6'>
                        <div id={styles.button_1}>
                            Hubungi Kami
                        </div>
                    </div>
                    <div className='col-6'>
                        <div id={styles.button_2}>
                            Tentang Kami
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
            <img
                src="https://drive.google.com/uc?export=view&id=1n_kimmJuSweMO_DjqwEhfJthq5JmC7-f"
                style={{overflow:"hidden"}}
            >
            </img>
        </div>
    </div>
</div>)
}

export default Hero;