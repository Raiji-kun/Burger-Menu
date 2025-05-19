
import styled from 'styled-components'
import FeatureBarreAdmin from './FeatureBarreAdmin'
import BarreAdminMenuOnglet from './BarreAdminMenuOnglet'

function BarreAdmin() {



  return (
    <BarAdmin>
      <BarreAdminMenuOnglet />
      <FeatureBarreAdmin />
    </BarAdmin>
  )
}

export default BarreAdmin

const BarAdmin = styled.div`
    
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  position: fixed;
    border: 1px black solid;

  bottom: 0px;
  overflow: auto;
`