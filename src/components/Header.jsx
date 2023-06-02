const Header = ({ selectedTeam, teamMemberCount }) => {

    return (
        <header className="container">
            <div className="row">
                <div className="col-8">
                    <h1>Team Member Allocation</h1>
                    <h3>{selectedTeam} has {teamMemberCount} members</h3>
                </div>
            </div>
        </header>
    );
}

export default Header;