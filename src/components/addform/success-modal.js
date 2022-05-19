import React from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import '../addform/success-modal.css'

  const SuccessModal = ({isModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#71ccca',
          borderRadius: '12px'
        },
      };      
  return (
    <Modal isOpen={isModalOpen} style={customStyles}>
      <div className='modal-inner'>
        <div style={{fontWeight: '400'}}> Expense Added Successfully!</div>
        <img src={require('../../assets/images/added-image.png')} alt="Expense Added"/>
        <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
          <div className='modal-inner-home'>
            <label>Home</label>
            <i className="bi bi-house-fill"></i>
          </div>
        </Link>
      </div>
    </Modal>
  )
}

export default SuccessModal