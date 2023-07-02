import "./DevLog.css";
import { IS_DEV_ENVRIONMENT } from "/config.js";

function DevLog(props) {
  return (
    IS_DEV_ENVRIONMENT && (
      <footer className="devlog">
        {props.data && JSON.stringify(props.data)}
      </footer>
    )
  );
}

export default DevLog;
