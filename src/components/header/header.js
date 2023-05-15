import styles from './header.module.css';

function Header(){
    return (<div className="container-fluid w-100" style={{height:"65px"}}>
        <div className="row w-100 h-100">
            <div className="col-4 d-flex justify-content-center">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <img src="https://drive.google.com/uc?export=view&id=1b2FDQhRzjRAbeBDku5NiffjDJEd_zmK0"/>
                </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
                <div className="col-3 d-flex justify-content-center align-items-center" id={styles.menu_button}>
                    Home
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    Service
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    About Us
                </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
                <div className="col-3 d-flex justify-content-center align-items-center">
                    Log in
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <div  id={styles.button}>
                        Daftar
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Header;