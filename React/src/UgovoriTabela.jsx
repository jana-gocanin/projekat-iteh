import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from 'jquery';


function UgovoriTabela() {
    const [data, setData] = useState([]);
    //const tableRef = useRef(null);
    $(document).ready( 
        function () {
            
            console.log(data);

            $('#tableUgovor').DataTable( {

                "bDestroy": true,
                columnDefs: [{
                    "defaultContent": "-",
                    "targets": "_all"
                  }],
                data: data,
                columns: [
                    { "data": "id" },
                    { "data": "potpisano"},
                    { "data": "datum_potpisa" },
                    { "data": "udomitelj_id" },
                    { "data": "pas_id" },
                    {  "data": "Selektuj",
                    "render": function (data, type, full, meta) {

                        return '<input type="radio" name="Selektuj" >'; }
                    }
                
                   
              ]},
            );
    
      

    } );

    useEffect(() => {
      axios.get('ugovor/getAll')
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
   <h1>Ugovori</h1>
          <table id="tableUgovor"className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
    <th>id</th>
      <th>potpisano</th>
      <th>datum potpisa</th>
      <th>Udomitelj</th>
        <th>Pas  </th>
      <th>Selektuj</th>
    </tr>
  </thead>
 
  </table>
   </>
  )
}

export default UgovoriTabela
