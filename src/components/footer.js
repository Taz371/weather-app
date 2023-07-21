const styles = {
  footerContainer: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop:400,
    color:'white'
  }
}

const Footer = (props) => {
  const { text } = props;
  return (
    <div style={styles.footerContainer}>
      <p>{text}</p>
    </div>
  );
}

export default Footer;