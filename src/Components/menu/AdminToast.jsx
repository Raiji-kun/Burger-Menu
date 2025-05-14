import styled from 'styled-components'
import { ToastContainer } from "react-toastify"

function AdminToast() {
  return (
       <ToastAdmin>
        <ToastContainer className="toaster" bodyClassName="body-toast" />
       </ToastAdmin>
  )
}

const ToastAdmin = styled.div`
    
.toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: dark;
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }

`


export default AdminToast