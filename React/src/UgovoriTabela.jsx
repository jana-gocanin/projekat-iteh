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
                    { "data": "udomitelj" },
                   
                 
                    { "data": "ime" },

                    { "data": null, defaultContent: "<button id='deleteUgovor' class='btnDelete'>delete</button>", targets: -1 }
                  ]
                },
                ); $('#tableUgovor .btnDelete').on('click', function () {
                  console.log($('#tableUgovor').DataTable().row($(this).closest('tr')));
                  let z = $('#tableUgovor').DataTable().row($(this).closest('tr')).data();
                  console.log(z);
                  deleteUgovor(z);
                  
                });
                      
              }, [ugovor]);

    useEffect(() => {
      axios.get('ugovor/join')
        .then(response => {
          setUgovor(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const deleteUgovor = async (ugovor) => {
      var config = {
          method: "delete",
          url: "ugovor/delete/"+ugovor.id,
          headers: {
            Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
          },
          
        };
    const res = await axios(config);
      if (res.data.status===200) {
          console.log(res.data.message);
      
        setUgovor(res.data.response.original);
      }
    };

  return (
   <>
   <h1>Ugovori</h1>
          <table id="tableUgovor"className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
    <th>id</th>
      <th>potpisano</th>
      <th>datum potpisa</th>
      <th>Udomitelj </th>
      {/* <th>Ime</th>
      <th>Prezime</th> */}
        <th>Pas  </th>
      <th>Selektuj</th>
    </tr>
  </thead>
 
  </table>
   </>
  )
}

export default UgovoriTabela
