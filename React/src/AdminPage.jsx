import React from 'react'
import PsiTabela from './PsiTabela'
import SideBar from './SideBar'
import UdomiteljiTabela from './UdomiteljiTabela'
import UgovoriTabela from './UgovoriTabela'
import { useState } from 'react'
import ModalPas from './ModalPas'
import ModalUdomitelj from './ModalUdomitelj'
import ModalUgovor from './ModalUgovor'

function AdminPage({data, setData}) {
  const [showModalPas, setshowModalPas] = useState();
    function showAddPas() {
      setshowModalPas(!showModalPas);
  }
  const [showModalUdomitelj, setshowModalUdomitelj] = useState();
    function showAddUdomitelj() {
      setshowModalUdomitelj(!showModalUdomitelj);
  }
  const [showModalUgovor, setshowModalUgovor] = useState();
    function showAddUgovor() {
      setshowModalUgovor(!showModalUgovor);
      }

      const [pas, setPas] = useState();
  const [udomitelj, setUdomitelj] = useState();
  const [ugovor, setUgovor] = useState();

  return (
   <>
   <div className='container'>
        <SideBar data={data} setData={setData} showAddPas={showAddPas} showAddUdomitelj={showAddUdomitelj} showAddUgovor={showAddUgovor} setPas={setPas} />
        {showModalPas &&
        <ModalPas setData={setData}  closeModal={showAddPas} closeModalUpdatePas={showAddPas} pas={pas} setPas={setPas}
         />
        }
        {showModalUdomitelj &&
          <ModalUdomitelj setUdomitelj={setUdomitelj} udomitelj={udomitelj} closeModalDodavanjeUdomitelja={showAddUdomitelj}  />}
        {showModalUgovor &&
          <ModalUgovor ugovor={ugovor} setUgovor={setUgovor} closeModalUgovor={showAddUgovor} />}
        <PsiTabela data={data} setData={setData} showAddPas={showAddPas} pas={pas} setPas={setPas} />
<UdomiteljiTabela udomitelj={udomitelj} setUdomitelj={setUdomitelj}/>
<UgovoriTabela ugovor={ugovor} setUgovor={setUgovor} />
   </div>
   </>
  )
}

export default AdminPage