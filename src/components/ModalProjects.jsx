import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

export default function ModalProjects({project_name, project_img, project_desc, url_repo, url_deploy, project_tech, id_project}) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  return (
    <>
     <div onClick={handleShow}>
         <h3>{project_name}</h3>
     </div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <Button className="btn-close-modal" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
            <img src={project_img} alt={project_name} />
            <h2>{project_name}</h2>
            <div className="modal-info">
                <a href={url_repo}><i className="fa-brands fa-github"></i> Ir al repositorio </a>
                <a href={url_deploy}><i className="fa-solid fa-up-right-from-square"></i> Ver Demo</a>
                <p>{project_desc}</p>
                <p className="project-tech">{project_tech}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    
    </>
  );
}
