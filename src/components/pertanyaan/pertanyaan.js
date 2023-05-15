import styles from './pertanyaan.module.css';
import ContainerPertanyaan from '../containerpertanyaan/containerpertanyaan.js';

function Pertanyaan(){
    return(<div className="container-fluid w-100 p-5" style={{height:"485px",background:"rgba(0, 200, 205,0.6)"}}>
        <div className='row w-100 h-50 m-0 justify-content-center' id={styles.title}>
            <h1>
                Memiliki Pertanyaan
            </h1>
            <p>
                Hubungi Kami
            </p>
        </div>
        <div className='row w-100 h-50 m-0 justify-content-center align-items-center'>
            <div className='col-3'>
                <ContainerPertanyaan image="https://drive.google.com/uc?export=view&id=12ZdllM1pzbeF8YnL21ryxzf1JH9fO4pe" title="Email" p="d3softwaresolution@bisnis.co.id"></ContainerPertanyaan>
            </div>
            <div className='col-3'>
                <ContainerPertanyaan image="https://drive.google.com/uc?export=view&id=1h4TRgqfp3PaF-uOOmstGbgs6Mv41PPAR" title="Whataapp" p="+62-815-4742-7721"></ContainerPertanyaan>
            </div>
            <div className='col-3'>
                <ContainerPertanyaan image="https://drive.google.com/uc?export=view&id=1QDHWrUfKmcfCMKhA_CoSrg2gWX3X2OSE" title="Linkedin" p="D3 Sofware Solution"></ContainerPertanyaan>
            </div>
        </div>
</div>)
}

export default Pertanyaan;