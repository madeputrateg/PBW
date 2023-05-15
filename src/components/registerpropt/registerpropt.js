import styles from './registerpropt.module.css';
import React, { useState } from 'react';

function RegisterPropt(){
    const [formData, setFormData] = useState({
        username: '',
        email:'',
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
              email:'',
              password: ''
            });
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
      };
    return ( <div id={styles.maindiv}>
        <div className='row w-100 justify-content-center'>
            <h1>
                <span id={styles.spancolour}>D3 </span> Software Solution<p id={styles.pbold}> Solusi Masalah Digital Mu</p>
            </h1>
        </div>
        <from>
                <input id={styles.textinput} type="text" placeholder='Username' onChange={handleChange} value={formData.username} name="username"></input>
                <input id={styles.textinput} type="text" placeholder='Alamat Email' onChange={handleChange} value={formData.email} name="email"></input>
                <input id={styles.textinput} type="text" placeholder='Password' onChange={handleChange} value={formData.password} name="password"></input>
        </from>
        
        <div className='row w-100 justify-content-center'>
            <p className='d-flex justify-content-center'>dengan membuat akun saya menyatakan telah membaca dan menerima D3 term of use dan privaci policy</p>
        </div>
        <div className='row w-100 justify-content-center'>
            <p className='d-flex justify-content-center' onClick={handleSubmit}>sudah punya akun? Login</p>
        </div>
        <div className='row w-100 justify-content-center'>
            <div id={styles.buttonblue}><p id={styles.buttontext}>Buat akun</p></div>
        </div>
    </div>)
}
export default RegisterPropt;