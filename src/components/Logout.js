import LocalStorageService from "../util/LocalStorageUtil";
import { useNavigate } from "react-router-dom";
import { Alert } from 'antd';

function Logout() {
    const navigate = useNavigate();
    LocalStorageService.clearToken();
    navigate("../");

    return (
        <div >
        </div>
    );
}

export default Logout;
