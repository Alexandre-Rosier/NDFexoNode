import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./List.css"

export default function List() {
    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState(false)


    useEffect(() => {
        
        const fetchData = async () => {
            const result = await axios("http://localhost:3001/companies")
            setCompanies(result.data)
        }
        fetchData() 
    },[])

    const handleFilter = () => {
        setFiltered(!filtered)
    }

    return(
        <div className="content">
            <div className="research">
                <input
                    type="text"
                    name="search"
                    placeholder="recherche entreprise"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}>
                </input>
                <button onClick={handleFilter}>valider</button>
                {companies
                    .filter((filteredCompany) => !filtered || filteredCompany.name === search)
                    .map((company) => (
                    <>
                        <p className="company-name"><strong>Entreprise :</strong>{company.name}</p>
                        <img className="img-brand" src={company.picture} alt={company.name}/>
                        <p className="director"><strong>Directeur :</strong>{company.director}</p>
                        <p className="location"><strong>Localisation :</strong>{company.location}</p>
                    </>
                    ))}
            </div>
        </div>
    )
}