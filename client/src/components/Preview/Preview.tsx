import "./Preview.css"
import eye from "../../assets/icon-show-preview.svg"

const Preview = () => {
    return (
        <div className="preview">
            <div className="title">
                Preview
                <div className="fullscreen">
                    <img src={eye} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Preview;