import styled from 'styled-components'

function OngletButton({id, title}) {

  return (
    <OngletAdminBar>
    <button id={id}>{title}</button>
    </OngletAdminBar>
  )
}

export default OngletButton

const OngletAdminBar = styled.div`
width: 10%;
height: 100%;
border: 1px solid black;



button{
   width: 100%;
  height: 100%;
  border : 0px;
  border-radius: 5px;
  padding: 10px 20px;
}
`