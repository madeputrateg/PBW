import styles from "./loginsecondpropt.module.css";


function LoginSecondPropt(){
    
return(<div id={styles.maindiv}>
    <div className='row w-100 justify-content-center'>
        <h1>
            <span id={styles.spancolour}>D3 </span> Software Solution<p id={styles.pbold}> Solusi Masalah Digital Mu</p>
        </h1>
    </div>
    <from>
            <input id={styles.textinput} type="text" placeholder='Username'></input>
            <input id={styles.textinput} type="text" placeholder='Password'></input>
    </from>
    <div className='row w-100 justify-content-center'>
        <div id={styles.buttonblue}><p id={styles.buttontext}>Login</p></div>
    </div>
    <div className='row w-100 justify-content-center'>
                <div id={styles.buttonwhite}><img src="https://drive.google.com/uc?export=view&id=1hu9t0AVStnVGZePebRNJqEIFS4tYUL7i" id={styles.buttonimage}
                >
                    </img><p id={styles.buttontext}>Login dengan google</p></div>
            </div>
    <div className='row w-100 justify-content-center'>
        <p className='d-flex justify-content-start'>Belum punya akun? buat akun</p>
    </div>
</div>)

}

export default LoginSecondPropt;