import styles from "./loginsecondpropt.module.css";
import React, { useState } from 'react';


function LoginSecondPropt(){
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
    };
    const handleSubmit = (e) => {
        fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response from the backend
            console.log(data);
            // Reset the form
            setFormData({
              username: '',
              password: ''
            });
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
      };
return(<div id={styles.maindiv}>
    <div className='row w-100 justify-content-center'>
        <h1>
            <span id={styles.spancolour}>D3 </span> Software Solution<p id={styles.pbold}> Solusi Masalah Digital Mu</p>
        </h1>
    </div>
    <from>
            <input id={styles.textinput} type="text" placeholder='Username' onChange={handleChange} value={formData.username} name="username"></input>
            <input id={styles.textinput} type="text" placeholder='Password' onChange={handleChange} value={formData.password} name="password"></input>
    </from>
    <div className='row w-100 justify-content-center'>
        <div id={styles.buttonblue}><p id={styles.buttontext} onClick={handleSubmit}>Login</p></div>
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