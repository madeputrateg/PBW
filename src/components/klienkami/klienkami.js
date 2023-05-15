import styles from './klienkami.module.css';

function KlienKami(props){
    return(<div className="container-fluid w-100 mt-5 mb-5" style={{height:"500px"}}>
        <div className='row w-100' id={styles.title}>
            <h1>
                Klien Kami
            </h1>
            <p>
            Dipercaya oleh Brand, Dipercayai oleh Personal, dan Disayangi oleh UMKM, di mana saja
            </p>
        </div>
        <div className='row w-100 h-75 mt-5 mb-5 justify-content-center'>
            <div className='row w-75 h-25 m-0 justify-content-center'>
                <div className='col-2 h-100 d-flex justify-content-center'>
                    <img
                    src="https://drive.google.com/uc?export=view&id=1s2CQ6cJfvr2EfNCkTSH4QWWgK2m9ee2n"
                    >
                    </img>
                </div>
                <div className='col-2 h-100 d-flex justify-content-center'>
                    <img
                    src="https://drive.google.com/uc?export=view&id=1efJDrLTWc8kAqqS1Ph8GScTcLWD88-ZG"
                    >
                    </img>
                </div>
                <div className='col-2 h-100 d-flex justify-content-center'>
                    <img
                        src="https://drive.google.com/uc?export=view&id=1LpqBUuYp6Z7WQKVRXxWGU5iNRfqY3SaI"
                        >
                    </img>
                </div>
            </div>
            <div className='row w-75 h-25 justify-content-center'>
                <div className='col-2 h-100 d-flex justify-content-center'>
                    <img
                        src="https://drive.google.com/uc?export=view&id=1trfjQv0fF8zyP5k_k5lI_IVi9xSynF-N"
                        >
                    </img>
                </div>
                <div className='col-2 h-100 d-flex justify-content-center'>
                    <img
                        src="https://drive.google.com/uc?export=view&id=1aUkuqeInEtlzoPcBsr2FQM2wRnPTY4z7"
                        >
                    </img>
                </div>
                <div className='col-2 h-100 d-flex justify-content-center'>
                    <img
                        src="https://drive.google.com/uc?export=view&id=103S8jPFisCXC3uCb1zYTlDzdP_6QBAnm"
                        >
                    </img>
                </div>
                <div className='col-4 h-100 d-flex justify-content-center'>
                    <img
                        src="https://drive.google.com/uc?export=view&id=1b6DvtZU6eBV5IZ4q32gTxboAz7Iph8yD"
                        >
                    </img>
                </div>
            </div>
        </div>
</div>)
}

export default KlienKami;