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

  }, [data])
   
    

//BRISANJE
// const handleDeleteRow = () => {
  

//   if (selectedRow.length > 0) {
//     const data = selectedRow.data();
//     const id = data.id;

//     axios.delete(`pas/delete/${id}`)
//       .then(response => {
//         setData(prevData => prevData.filter(item => item.id !== id));
//         selectedRow.remove().draw();
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// };

$('#table .btnDelete').on('click', function () {
   console.log($('#table').DataTable().row($(this).closest('tr')));
   let z = $('#table').DataTable().row($(this).closest('tr')).data();
 console.log(z);
   setPas(z);
   showAddPas();


// if (selectedRow.length > 0) {
//   const data = selectedRow.data();
//   const id = data.id;

//   axios.delete(`pas/delete/${id}`)
//     .then(response => {
//       setData(prevData => prevData.filter(item => item.id !== id));
//       selectedRow.remove().draw();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }


});






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
      <th>Godine</th>
      <th>Boja</th>
        <th>Tezina</th>
        <th>Vakcina</th>
      <th>Selektuj</th>
    </tr>
  </thead>

        

  {/* <tbody>
  {data.map((pas) => (
    //console.log(pas.id);
                    <tr key={pas.id}>
                        <td>{pas.id}</td>
                         <td>{pas.ime}</td>
                        <td>{pas.godine}</td>
                        <td>{pas.boja}</td>
                        <td>{pas.tezina}</td>
                        <td>{pas.vakcina_id}</td>
                        {/* Add additional table cells as needed */}
                    {/* </tr> */}
{/* ))} */}

  {/* </tbody> */} 
  {/* <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
            alt=""
            style={{ width: 45, height: 45 }}
            className="rounded-circle"
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
            <p className="text-muted mb-0">john.doe@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Software engineer</p>
        <p className="text-muted mb-0">IT department</p>
      </td>
      <td>
        <span className="badge badge-success rounded-pill d-inline">
          Active
        </span>
      </td>
                          <td>Senior</td>
                          <td>Junior</td>
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/6.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
            <p className="text-muted mb-0">alex.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Consultant</p>
        <p className="text-muted mb-0">Finance</p>
      </td>
      <td>
        <span className="badge badge-primary rounded-pill d-inline">
          Onboarding
        </span>
      </td>
                          <td>Junior</td>
                          <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src="https://mdbootstrap.com/img/new/avatars/7.jpg"
            className="rounded-circle"
            alt=""
            style={{ width: 45, height: 45 }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
            <p className="text-muted mb-0">kate.hunington@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Designer</p>
        <p className="text-muted mb-0">UI/UX</p>
      </td>
      <td>
        <span className="badge badge-warning rounded-pill d-inline">
          Awaiting
        </span>
      </td>
                          <td>Senior</td>
                          <td>Junior</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-rounded btn-sm fw-bold"
          data-mdb-ripple-color="dark"
        >
          Edit
        </button>
      </td>
    </tr>
  </tbody> */}
      </table>
    </>
  )
}

export default PsiTabela