import Markdown from 'markdown-to-jsx';
import { useAppStore } from "../../lib/store";
import "./Preview.css"
import eye from "../../assets/icon-show-preview.svg"

const Preview = () => {
    const { activeDoc } = useAppStore();

    return (
        <div className="preview">
            <div className="title">
                Preview
                <div className="fullscreen">
                    <img src={eye} alt="" />
                </div>
            </div>
            <Markdown>
                {activeDoc.content}
            </Markdown>
        </div>
    );
};

export default Preview;