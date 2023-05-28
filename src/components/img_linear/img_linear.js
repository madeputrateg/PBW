import styles from './img_linear.module.css';

function ImgLinear(props){
    return(<div id={styles.maindiv}  className="container-fluid position-relative" >
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