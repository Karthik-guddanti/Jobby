import React from "react";
import { useState } from "react";
const Users = [
    {Name:"Karthik", age:18},
    {Name:"Mani", age:19}, 
    {Name:"Koushik",age:20}
]

const Search: React.FC = () => {
    const [val, setVal] = useState('');
    const [name, setName] = useState<{ Name: string; age: number }[]>([]);

    const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
    };

    const handleSearch = () => {
        const result = Users.filter(user => 
            user.Name.toLowerCase().includes(val.toLowerCase())
        );
        setName(result);
    };

    return (
        <>
        <input type="text" placeholder="Search Users" value={val} onChange={InputChange} />
        <button onClick={handleSearch}>Search</button>
        {name.map((user, index) => (
            <p key={index}>{user.Name} - {user.age}</p>
        ))}
        
        </>
    )
}

export default Search;