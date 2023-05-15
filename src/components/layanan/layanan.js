import styles from './layanan.module.css';
import ImgLinear from '../img_linear/img_linear.js';

function Layanan(){
    return(<div className="row w-100 justify-content-center align-items-center" style={{height:"100vh",marginTop:"50px",marginBottom:"50px",marginLeft:"0px",marginRight:"0px"}}>
        <div className='row w-100 justify-content-center' id={styles.title}>
            <h1>
                Layanan Kami
            </h1>
            <p>
                Berbagai pelayan yang siap membantu anda
            </p>
        </div>
        <div className='row justify-content-center align-items-center m-3'>
            <div className='col-4'>
                <ImgLinear image="https://drive.google.com/uc?export=view&id=1Oj6CCRZFM5sVjjte6QdiKjpqR_mG1Iwm" title="Website Application"/>
            </div>
            <div className='col-4'>
                <ImgLinear image="https://drive.google.com/uc?export=view&id=1QgnucNt6wWM3B2z-uyMFkPzI9iIt6YTE" title="Mobile Application"/>
            </div>
        </div>
        <div className='row justify-content-center m-3'>
            <div className='col-4'>
                <ImgLinear image="https://drive.google.com/uc?export=view&id=11rE2xmRqG-VtikvnJcBwScd9VE0ygLj0" title="Software Application"/>
            </div>
            <div className='col-4'>
                <ImgLinear image="https://drive.google.com/uc?export=view&id=1LltMZf8vWjvbdO7ZMoaChDb1uaGxawn2" title="Design"/>
            </div>
        </div>
    </div>)
}

export default Layanan;