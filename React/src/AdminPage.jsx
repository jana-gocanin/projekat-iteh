import React from 'react'
import PsiTabela from './PsiTabela'
import SideBar from './SideBar'
import UdomiteljiTabela from './UdomiteljiTabela'
import UgovoriTabela from './UgovoriTabela'




function AdminPage() {
  return (
   <>
   <div className='container'>
<SideBar />
<PsiTabela />
<UdomiteljiTabela />
<UgovoriTabela />
   </div>
   </>
  )
}

export default AdminPage