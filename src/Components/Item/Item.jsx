import React from "react";
import './item.css'

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, age, status, id } = this.props.item;
        const { delItem } = this.props;
        return (
            <>
                <div className="item">
                    <p className="text">Имя: {name}</p>
                    <p className="text">Возраст: {age}</p>
                    <p className="text">Статус: {status}</p>
                    <span className="close-btn" onClick={() => delItem(id)}>✕</span>
                </div>
            </>
        )
    }
}
export default Item;