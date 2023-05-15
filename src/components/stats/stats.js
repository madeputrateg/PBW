import styles from './stats.module.css';

function Stats(){
    return(<div className="row w-100 justify-content-center align-items-center m-0" style={{height:"450px",background:"rgba(0, 200, 205,0.06)"}}>
        <div className='col-2' id={styles.title}>
            <img
            src='https://drive.google.com/uc?export=view&id=1FCOKjgJ4jPrVcGXhwg70iEhmm5Re6JpH'
            >
            </img>
            <p>
                Project Selesai
            </p>
            <h2>
                7
            </h2>
            
        </div>
        <div className='col-2 h-50' id={styles.title} style={{border:"solid",borderTopWidth:"0px",borderBottomWidth:"0px",borderColor:"rgba(196, 196, 196, 0.5)"}}>
            <img
            src='https://drive.google.com/uc?export=view&id=1p-8KPgE-46QzD81ObZtQ_5Xgr_oCiV-5'
            >
            </img>
            <p>
                Pelanggan Puas
            </p>
            <h2>
                90%
            </h2>
            
        </div>
        <div className='col-2 h-50' id={styles.title} style={{border:"solid",borderTopWidth:"0px",borderBottomWidth:"0px",borderLeftWidth:"0px",borderColor:"rgba(196, 196, 196, 0.5)"}}>
            <img
            src='https://drive.google.com/uc?export=view&id=1l6HgDY4G9B2KONd6wJnDFTbqneruLn81'
            >
            </img>
            <p>
                Pilihan layanan
            </p>
            <h2>
                4
            </h2>
            
        </div>
        <div className='col-2' id={styles.title}>
            <img
            src='https://drive.google.com/uc?export=view&id=1X8BmpUGv37rbKuuXnjK2x40N-Ji65jJR'
            >
            </img>
            <p>
                Team Expertise
            </p>
            <h2>
                4
            </h2>
            
        </div>
</div>)
}

export default Stats;