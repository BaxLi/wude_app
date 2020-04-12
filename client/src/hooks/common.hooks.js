import React, { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../context/auth.context'
import { Modal } from 'react-bootstrap';

export const useCommonHooks=()=>{
    const { userDetails } = useContext(AuthContext)
    const [smShow, setSmShow] = useState(false);
    
    const userStylesClick=()=>{
        console.log("userStylesClick -> userStylesClick", userStylesClick)
        setSmShow(!smShow)
    }
    function ModalWindow() {
        return (
          <div>
            <Modal
              size="sm" show={smShow} onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  Small Modal
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
            </Modal>
          </div>
        );
      }
      useEffect(() => {
        // console.log("useCommonHooks -> smShow", smShow)
        ModalWindow()
     }, [smShow])
     
    return {userStylesClick, ModalWindow}
}
