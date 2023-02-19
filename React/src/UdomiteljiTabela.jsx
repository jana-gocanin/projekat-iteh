import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from 'jquery';

function UdomiteljiTabela() {
    
    const [data, setData] = useState([]);
    //const tableRef = useRef(null);
    $(document).ready( 
        function () {
            
            console.log(data);

            $('#tableUdomitelj').DataTable( {

                "bDestroy": true,
                columnDefs: [{
                    "defaultContent": "-",
                    "targets": "_all"
                  }],
                data: data,
                columns: [
                    { "data": "id" },
                    { "data": "ime"},
                    { "data": "prezime" },
                    { "data": "datum_rodjenja" },
                    { "data": "email" },
                    
                    {  "data": "Selektuj",
                    "render": function (data, type, full, meta) {

                        return '<input type="radio" name="Selektuj" >'; }
                    }
                
                   
              ]},
            );
    
      

    } );

    useEffect(() => {
      axios.get('udomitelj/getAll')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

  return (
    <>
     <h1>Udomitelji</h1>
          <table id="tableUdomitelj" className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
    <th>Id</th>
      <th>Ime</th>
      <th>Prezime</th>
      <th>Datum rodjenja</th>
        <th>Email</th>
      <th>Selektuj</th>
    </tr>
  </thead>
  
  </table>
    
    </>
  )
}

export default UdomiteljiTabela