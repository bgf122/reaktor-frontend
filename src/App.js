import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function App() {    
    const [gloves, setGloves] = useState([]);

    const fetchData = () => {
        fetch('https://reaktor-backend.herokuapp.com/api/beanies')
        .then(response => response.json())
        .then(data => setGloves(data))
    }

    const gridOptions = {
        columnDefs: [
            { headerName:'Name', field:'name'},
            { headerName:'Price', field:'price'},
            { headerName:'Manufacturer', field:'manufacturer'},
            { headerName:'Color', field:'color'},
            { headerName:'Availability', field: 'availability'}
        ],
        defaultColDef: {
            width: 175,
            sortable: true
        }, 
        pagination: true, 
    }

    useEffect(() => fetchData(), []);

    return (
        <div style={{height: '100%', width: '100%', margin: 'auto'}}>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <div className="ag-theme-alpine">
                    <AgGridReact
                        gridOptions={gridOptions}
                        domLayout='print'
                        rowData={gloves}>
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
}