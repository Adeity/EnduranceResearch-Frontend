import React, { useEffect } from 'react';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import './custom-toast.styles.css'


const CustomToast = ({title,  message, trigger, smallText, variant}) => {

  useEffect(() => {
    setShow(trigger)
  }, [trigger]);

  const [show, setShow] = useState(trigger);

  return(
        <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide bg={variant?.toLowerCase()} className='toast'>
          <Toast.Header>
            {/* <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /> */}
            <strong className="me-auto">{ title }</strong>
            <small>{ smallText }</small>
          </Toast.Header>
          <Toast.Body className={ variant === 'Dark' ? '' : 'text-white'}>{ message }</Toast.Body>
        </Toast>
    )
}

export default CustomToast;