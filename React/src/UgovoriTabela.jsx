import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from 'jquery';


function UgovoriTabela({ugovor, setUgovor}) {
    //const [data, setData] = useState([]);
    //const tableRef = useRef(null);
    useEffect(() => {

            $('#tableUgovor').DataTable( {

                "bDestroy": true,
                columnDefs: [{
                    "defaultContent": "-",
                    "targets": "_all"
                  }],
                data: ugovor,
                columns: [
                    { "data": "id" },
                    { "data": "potpisano"},
                    { "data": "datum_potpisa" },
                    { "data": "udomitelj_id" },
                    { "data": "pas_id" },
                    { "data": null, defaultContent: "<button id='deleteUgovor' class='btnDelete'>delete</button>", targets: -1 }
                  ]
                },
                ); $('#tableUgovor .btnDelete').on('click', function () {
                  console.log($('#tableUgovor').DataTable().row($(this).closest('tr')));
                  let z = $('#tableUgovor').DataTable().row($(this).closest('tr')).data();
                  console.log(z);
                  setUgovor(z);
                  
                });
                      
              }, [ugovor]);

    useEffect(() => {
      axios.get('ugovor/getAll')
        .then(response => {
          setUgovor(response.data);
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
