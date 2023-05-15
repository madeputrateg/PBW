import styles from './registerpropt.module.css';

function RegisterPropt(){
    return ( <div id={styles.maindiv}>
        <div className='row w-100 justify-content-center'>
            <h1>
                <span id={styles.spancolour}>D3 </span> Software Solution<p id={styles.pbold}> Solusi Masalah Digital Mu</p>
            </h1>
        </div>
        <from>
                <input id={styles.textinput} type="text" placeholder='Username'></input>
                <input id={styles.textinput} type="text" placeholder='Alamat Email'></input>
                <input id={styles.textinput} type="text" placeholder='Password'></input>
        </from>
        
        <div className='row w-100 justify-content-center'>
            <p className='d-flex justify-content-center'>dengan membuat akun saya menyatakan telah membaca dan menerima D3 term of use dan privaci policy</p>
        </div>
        <div className='row w-100 justify-content-center'>
            <p className='d-flex justify-content-center'>sudah punya akun? Login</p>
        </div>
        <div className='row w-100 justify-content-center'>
            <div id={styles.buttonblue}><p id={styles.buttontext}>Buat akun</p></div>
        </div>
    </div>)
}
export default RegisterPropt;