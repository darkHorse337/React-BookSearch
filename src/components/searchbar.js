import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import "./searchbar.css"

function SearchBar({placeholder,data}){
    const[filteredData,setFilteredData]= useState([]);
    const[wordClear,setWordClear]= useState("");
    const handleChangeFilter=(e)=>{
        const searchWord= e.target.value;
        setWordClear(searchWord);
        const newFilter=data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord);
        })
    if(searchWord===""){
        setFilteredData([])
    }
    else{
        setFilteredData(newFilter);
    }
}
    const clearInput=()=>{
        setFilteredData([]);
        setWordClear("");
    }
    return(
        <div className="search">
            <div className="searchInputs"/>
            <input type="text" placeholder={placeholder} value={wordClear} onChange={handleChangeFilter}/>
            {filteredData.length===0 ?(
            <SearchIcon/>
            )
            :(<ClearIcon id="clearBtn" onClick={clearInput} />            
            )}
            <div className="searchIcon"></div>
            {filteredData.length!==0 && (
            <div className="dataResults">
                {filteredData.map((value,key)=>{
                    return(
                        <a className="dataItem" href={value.link} target="_blank">
                       <p>{value.title}</p> 
                       </a> 
                    );
                })}
            </div>
            )}
        </div> 
    );
}
export default SearchBar;