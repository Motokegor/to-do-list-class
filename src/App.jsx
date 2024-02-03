import React from "react";
import "./App.css";
import Item from "./Components/Item/Item.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newAge: "",
      newStatus: "",
      filterValue: "",
      items: [],
    };
  }

  rendItem = () => {
    const newItem = {
      id: Date.now(),
      name: this.state.newName,
      age: this.state.newAge,
      status: this.state.newStatus,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
      newName: "",
      newAge: "",
      newStatus: "",
      filterValue: "",
    }));
  };

  handleFilterChange = (e) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.filterValue = e.target.value;
    this.setState(copyState);
  };
  handleNameChange = (e) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.newName = e.target.value;
    this.setState(copyState);
  };

  handleAgeChange = (e) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.newAge = e.target.value;
    this.setState(copyState);
  };
  handleStatusChange = (e) => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    copyState.newStatus = e.target.value;
    this.setState(copyState);
  };
  filterItems = () => {
    const filterItems = this.state.items.filter((item) =>
      item.status.includes(this.state.filterValue)
    );
    this.setState({ items: filterItems });
  };
  delItem = (id) => {
    const datedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: datedItems });
  };

  render() {
    return (
      <>
        <div className="form">
          <input
            placeholder="Имя"
            value={this.state.newName}
            onChange={this.handleNameChange}
          />
          <input
            placeholder="Возраст"
            value={this.state.newAge}
            onChange={this.handleAgeChange}
          />
          <select
            value={this.state.newStatus}
            onChange={this.handleStatusChange}
          >
            <option value="" disabled>
              Status
            </option>
            <option value="200">200</option>
            <option value="404">404</option>
            <option value="600">600</option>
          </select>
          <button onClick={this.rendItem}>Отправить</button>
        </div>
        <div className="filter">
          <h2>Филтер</h2>
          <select
            value={this.state.filterValue}
            onChange={this.handleFilterChange}
          >
            <option value="200">200</option>
            <option value="404">404</option>
            <option value="600">600</option>
          </select>
          <button onClick={this.filterItems}>Филтер</button>
        </div>
        <div className="note">
          {this.state.items.map((item, index) => (
            <Item
              key={index}
              item={item}
              content={this.state}
              delItem={this.delItem}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
