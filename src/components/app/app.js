import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: 'John Deer', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Daniel Cherkashyn', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Alina Bazhanova', salary: 5000, increase: false, rise: false, id: 3}
            ]
        }

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: data.filter(item => item.id !== id) // newArr
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }
    
    render() {
        const { data } = this.state;
        const employeeAmount = data.length;
        const increasedAmount = data.filter(elem => elem.increase).length;

        return (
            <div className="app">
                <AppInfo 
                    employeeAmount={employeeAmount}
                    increasedAmount={increasedAmount}
                />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployersList 
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployersAddForm 
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;

