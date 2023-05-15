import styles from './footer.module.css';

function Footer(){
    return(<div className="container-fluid w-100">
        <div className='row' id={styles.row}>
            <div className='col-4' id={styles.col}>
                <img src="https://drive.google.com/uc?export=view&id=1b2FDQhRzjRAbeBDku5NiffjDJEd_zmK0"/>
                <p>
                    Kami membantu bisnis dari semua ukuran meningkatkan jangkauan ke pelanggan potensial mereka dengan membuat keputusan yang lebih cerdas tentang bagaimana mereka mempromosikan bisnis mereka secara online.
                </p>
            </div>
            <div className='col-2' id={styles.down}>
                <h1>
                    Layanan Kami
                </h1>
                <p>
                    Software
                </p>
                <p>
                    Website
                </p>
                <p>
                    Mobile Apps
                </p>
                <p>
                    Design
                </p>
            </div>
            <div className='col-2' id={styles.down}>
                <h1>
                    Tautan
                </h1>
                <p>
                    Home
                </p>
                <p>
                    Layanan
                </p>
                <p>
                    Hubungi kami
                </p>
                <p>
                    Tentang
                </p>
            </div>
            <div className='col-2' id={styles.down}>
                <div className='row' id={styles.down}>
                    <h1>
                        Hubungi Kami
                    </h1>
                    <p>
                        Email
                    </p>
                    <p>
                        Whataapp
                    </p>
                    <p>
                        Telegram
                    </p>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <div id={styles.logo}>
                            <img
                                src="https://drive.google.com/uc?export=view&id=1dGsPba2V6jagYrS-wIuhfJBfvebfRfPP"
                            ></img>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div id={styles.logo}>
                            <img
                                src="https://drive.google.com/uc?export=view&id=1sKQOy735zVYFUPtUmmMgfPzO6Si8kQJk"
                            ></img>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div id={styles.logo}>
                            <img
                                src="https://drive.google.com/uc?export=view&id=1vYhZWfJlVupUxVVAjfsyrPBASF7Xaic3"
                            ></img>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div id={styles.logo}>
                            <img
                                src="https://drive.google.com/uc?export=view&id=1ZhM_kevGrA29zX3Wi5V35_P6Km82kIPl"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row' id={styles.copyright}>Copyright ® 2023 Kelompok 1 All rights Rcerved</div>
</div>)
}

export default Footer;