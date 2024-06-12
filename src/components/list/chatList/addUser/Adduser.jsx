import "./addUser.css";

const Adduser = () => {
    return (
        <div className="addUser">
            <form>
                <input type="text" placeholder="Search user" name="username" />
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt="" />
                    <span>Mehmet Bilgi</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}

export default Adduser