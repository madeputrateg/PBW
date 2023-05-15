import { useNavigate } from 'react-router-dom';
import styles from './firstloginpropt.module.css';


function FirstLoginPropt(){
    const navigate =useNavigate();
    function Register(){
        navigate("/Register");
    }
    return(<div id={styles.maindiv}>
        <div className='row w-100 justify-content-center'>
            <h1>
                <span id={styles.spancolour}>D3 </span> Software Solution<p id={styles.pbold}> Solusi Masalah Digital Mu</p>
            </h1>
        </div>
        <div className='row w-100 justify-content-center'>
            <div id={styles.buttonblue}><p id={styles.buttontext} onClick={Register}>Daftar dengan email & password</p></div>
        </div>
        <div className='row w-100 justify-content-center'>
            <div id={styles.buttonwhite}><img src="https://drive.google.com/uc?export=view&id=1hu9t0AVStnVGZePebRNJqEIFS4tYUL7i" id={styles.buttonimage}
            >
                </img><p id={styles.buttontext}>Daftar dengan google</p></div>
        </div>
        <div className='row w-100 justify-content-center'>
            <p className='d-flex justify-content-center'>dengan membuat akun saya menyatakan telah membaca dan menerima D3 term of use dan privaci policy</p>
        </div>
        <div className='row w-100 justify-content-center'>
            <p className='d-flex justify-content-center'>sudah punya akun? Login</p>
        </div>
    </div>)
}

export default FirstLoginPropt;