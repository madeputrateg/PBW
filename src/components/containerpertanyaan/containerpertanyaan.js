import styles from './containerpertanyaan.module.css';

function ContainerPertanyaan(props){
    return(<div id={styles.container}>
        <div className='row' id={styles.title}>
            <div style={{display:'flex',justifyContent:"center",marginTop:"3vh"}}>
                <img
                    src={props.image}
                    height={"30px"}
                    width={"30px"}
                >
                </img>
            </div>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.p}
            </p>
        </div>
        <div className='row' id={styles.message}>
            send massage -
        </div>
</div>)
}

export default ContainerPertanyaan;