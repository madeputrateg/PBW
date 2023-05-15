import styles from './img_linear.module.css';

function ImgLinear(props){
    return(<div className="container-fluid position-relative" style={{height:"30vh",width:"25vw",marginTop:"5px",marginBottom:"5px"}}>
        <img
            src={props.image}
            id={styles.image}
        ></img>
        <p id={styles.title}>
            {props.title}
        </p>
        <div id={styles.colour}>

        </div>
    </div>)
}

export default ImgLinear;