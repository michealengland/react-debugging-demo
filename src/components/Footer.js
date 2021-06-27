import Modal from './Modal';

const Footer = ({ completed, openModal, closeModal, modal, defaultState, setCompleted}) => {

  const count = Object.values(completed).filter(complete => complete === true).length;
  const percent = count/7*100;
  if(percent === 100){
    openModal()
  }
  const containerStyles = {
    height: 20,
    backgroundColor: "#fff",
    border:'1px solid black',
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${percent}%`,
    backgroundColor: "#97B9C4",
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${Math.floor(percent)}%`}</span>
      </div>
      <Modal closeModal={closeModal} modal={modal} setCompleted={setCompleted} defaultState={defaultState}/>
    </div>
  );
};

export default Footer;
