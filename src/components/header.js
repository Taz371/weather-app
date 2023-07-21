const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color:'white'
  }
}

// Defining a React component called Header
const Header = (props) => {
  const { title } = props; // Extract the title variable from props
  return (
    <div style={styles.headerContainer}>
      {/* Using the 'title' variable */}
      <h1>{title}</h1>
    </div>
  );
}

export default Header;