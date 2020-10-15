import React, {useEffect, useState} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';

const App = () => {

    const [searchfield, setSearchField] = useState('');
    const [robots, setRobots] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {
                setRobots(users)
                // console.log('hi')
            });
    },[])

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
    );
}

export default App;