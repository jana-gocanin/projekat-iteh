import React from 'react'
import axios from 'axios';
import { useState, useEffect,useRef } from 'react';
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from 'jquery';


function PsiTabela({ data, setData, showAddPas, pas, setPas }) {


  

  useEffect(() => {
    $('#table').DataTable({

      "bDestroy": true,
      columnDefs: [{
        "defaultContent": "-",
        "targets": "_all"
      }], buttons: [
        'copy', 'excel', 'pdf'
      ],
      data: data,
      columns: [
        { "data": "id" },
        { "data": "ime" },
        { "data": "boja" },
        { "data": "godine" },
        { "data": "tezina" },
        { "data": "vakcina_id" },
        
        { "data": null, defaultContent: "<button id='edit' class='btnEdit' variant='primary'   >edit</button> <button class='btnDelete'>delete</button>", targets: -1 }
        
      ]
    }
      
     
  );
  $('#table .btnEdit').on('click', function () {
    console.log($('#table').DataTable().row($(this).closest('tr')));
    let z = $('#table').DataTable().row($(this).closest('tr')).data();
  console.log(z);
    setPas(z);
    showAddPas();
  });

  $('#table .btnDelete').on('click', function () {
    console.log($('#table').DataTable().row($(this).closest('tr')));
    let z = $('#table').DataTable().row($(this).closest('tr')).data();
  console.log(z);
    //setPas(z);
   deletePas(z);
    
 
 
 });

  }, [data])
   
    

//BRISANJE

  
const deletePas = async (pas) => {
  var config = {
      method: "delete",
      url: "pas/delete/"+pas.id,
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
      
    };
const res = await axios(config);
  if (res.data.status===200) {
      console.log(res.data.message);
  
    setData(res.data.response.original);
    setPas(null);
  }
};






//   const handleAddData = (newData) => {
//     axios.post('pas/getAll', newData)
//       .then(response => {
//         setData([...data, response.data]);
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
    

  return (
    <>
    <h1>Psi</h1>
          <table id="table" className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
    <th>Id</th>  
      <th>Ime</th>
      <th>Boja</th>
      <th>Godine</th>
        <th>Tezina</th>
        <th>Vakcina</th>
      <th>Selektuj</th>
    </tr>
  </thead>
      </table>
    </>
  )
}

export default PsiTabela