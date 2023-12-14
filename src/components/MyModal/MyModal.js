import Modal from 'react-bootstrap/Modal';
import './MyModal.css'
import { Form, InputGroup } from 'react-bootstrap';
import { Eye, Facebook, Google } from 'react-bootstrap-icons';
import Image from '../atg_illustration.png'

function SignupModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='ModalHeader'>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
      </div>

      <div className="ModalBody">
        <div className="inputs m-0 p-0">
          <h2>Create Account</h2>
          <InputGroup>
            <Form.Control className='inputFields' aria-label="First name" placeholder='First Name'/>
            <Form.Control className='inputFields' aria-label="Last name" placeholder='Last Name'/>
          </InputGroup>
          <Form.Control className='inputFields' aria-label="Email" placeholder='Email'/>
          <InputGroup>
            <Form.Control className='inputFields w-100' aria-label="Password" placeholder='Password'/>
            <Eye 
            style={{position: 'absolute', cursor: 'pointer', right:'18px', alignSelf: 'center'}}
            />
          </InputGroup>
          <Form.Control className='inputFields' aria-label="Confirm Password" placeholder='Confirm Password'/>

          <button className='btn-one-inputs'>Create Account</button>

          <button className="btn-two-inputs">
            <Facebook /> Sign up with Facebook
          </button>
          <button className="btn-two-inputs">
            <Google /> Sign up with Google
          </button>
        </div>

        <div className='displays m-0 p-0'>
          <p>
            <span id='modal-span-one'>Already have an account?</span>
            <span id='modal-span-two'>Sign In</span>
          </p>
          <img src={Image} alt="" />
          <p className='bottom-note-Modal'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </Modal>
  );
}

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='ModalHeader'>
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
      </div>

      <div className="ModalBody">
        <div className="inputs m-0 p-0">
          <h2>Create Account</h2>
          <Form.Control className='inputFields' aria-label="Email" placeholder='Email'/>
          <InputGroup>
            <Form.Control className='inputFields w-100' aria-label="Password" placeholder='Password'/>
            <Eye 
            style={{position: 'absolute', cursor: 'pointer', right:'18px', alignSelf: 'center'}}
            />
          </InputGroup>

          <button className='btn-one-inputs'>Sign In</button>

          <button className="btn-two-inputs">
            <Facebook /> Sign in with Facebook
          </button>
          <button className="btn-two-inputs">
            <Google /> Sign in with Google
          </button>
          <a href="#forgot" className="forgotPassword">Forgot Password?</a>
        </div>

        <div className='displays m-0 p-0'>
          <p>
            <span id='modal-span-one'>Don't have an account?</span>
            <span id='modal-span-two'>Create new for free!</span>
          </p>
          <img src={Image} alt="" />
        </div>
      </div>
    </Modal>
  );
}

export {SignupModal, LoginModal};