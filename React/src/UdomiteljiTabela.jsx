import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from 'jquery';

function UdomiteljiTabela({udomitelj, setUdomitelj}) {
    
  
    //const [data, setData] = useState([]);
    //const tableRef = useRef(null);
  useEffect(() => {
    $('#tableUdomitelj').DataTable({

      "bDestroy": true,
      columnDefs: [{
        "defaultContent": "-",
        "targets": "_all"
      }], buttons: [
        'copy', 'excel', 'pdf'
      ],
      data: udomitelj,
      columns: [
        { "data": "id" },
        { "data": "ime" },
        { "data": "prezime" },
        { "data": "datum_rodjenja" },
        { "data": "email" },
                    
        { "data": null, defaultContent: "<button id='deleteUdomitelj' class='btnDelete'>delete</button>", targets: -1 }
                
                   
      ]
    },
    ); $('#tableUdomitelj .btnDelete').on('click', function () {
      console.log($('#tableUdomitelj').DataTable().row($(this).closest('tr')));
      let z = $('#tableUdomitelj').DataTable().row($(this).closest('tr')).data();
      console.log(z);
      deleteUdomitelj(z);
      
    });
          
  }, [udomitelj]);
    useEffect(() => {
      axios.get('udomitelj/getAll')
        .then(response => {
          setUdomitelj(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const deleteUdomitelj = async (udomitelj) => {
      var config = {
          method: "delete",
          url: "udomitelj/delete/"+udomitelj.id,
          headers: {
            Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
          },
          
        };
    const res = await axios(config);
      if (res.data.status===200) {
          console.log(res.data.message);
      
        setUdomitelj(res.data.response.original);
      }
    };

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