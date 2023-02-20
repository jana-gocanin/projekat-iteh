import React from 'react'
import PsiTabela from './PsiTabela'
import SideBar from './SideBar'
import UdomiteljiTabela from './UdomiteljiTabela'
import UgovoriTabela from './UgovoriTabela'
import { useState } from 'react'



function AdminPage({data, setData}) {
  
  return (
   <>
   <div className='container'>
<SideBar  data={data} setData={setData}/>
<PsiTabela data={data} setData={setData} />
<UdomiteljiTabela />
<UgovoriTabela />
   </div>
   </>
  )
}

export default AdminPage