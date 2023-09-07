import './MinisterInfoContainer.css';
import MinisterItem from './MinisterItem';

const MinisterInfoContainer = (props) => {
    return (<div className="minister-container" onMouseLeave={props.mouseLeave}>
        <MinisterItem/>
        <MinisterItem/>
    </div>);
}

export default MinisterInfoContainer;