import styles from "./sidebar.module.css";

function Sidebar(props){
    return (<div className="container-fluid m-0 p-0" id={styles.container}>
        <ol className="col-2" id={styles.sidebar}>
            <li>
                dashboard
            </li>
            <li>
                else
            </li>
        </ol>
        <div className="col-10">
            {props.children}
        </div>
    </div>)
}

export default Sidebar;