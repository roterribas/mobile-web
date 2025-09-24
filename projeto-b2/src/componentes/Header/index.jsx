const Header = (props) => {

    const headerStyle = {
        background: '#bebebe',
        padding: '20px',
        textAlign: 'center',
        borderBotton: '2px silid #696969',
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: '#191970'
    }
    
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
        </header>
    );
}

export default Header
