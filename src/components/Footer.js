const Footer = ({ completed }) => {

  const count = Object.values(completed).filter(complete => complete === true).length;
  const percent = count/7*100;

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
    </div>
  );
};

export default Footer;