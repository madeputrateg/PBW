import LoginImage from "../../components/loginimage/loginimage.js";
import LoginSecondPropt from "../../components/loginsecondpropt/loginsecondpropt.js";

function LoginSecond(){
    return (<div className="container-fluid w-100 m-0 p-0" style={{height:"100vh"}}>
        <div className="row w-100 h-100">
            <div className="col-7">
                <LoginImage/>
            </div>
            <div className="col-5 d-flex justify-content-center align-items-center">
                <LoginSecondPropt/>
            </div>
        </div>

    </div>)
}

export default LoginSecond;