import { useState } from "react"
import "./chatList.css"
import Adduser from "./addUser/Adduser"

const Chatlist = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="chatList">
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add"
                    onClick={() => setAddMode((prev) => !prev)} />
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mehmet Bilgi</span>
                    <p>Hello World</p>
                    <div className="channelSource">
                        <img src="./whatsapp.png" alt="" className="sourceIcon" />
                        <p className="channelName">Whatsapp</p>
                    </div>
                </div>

            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mehmet Bilgi</span>
                    <p>Hello World</p>
                    <div className="channelSource">
                        <img src="./whatsapp.png" alt="" className="sourceIcon" />
                        <p className="channelName">Whatsapp</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mehmet Bilgi</span>
                    <p>Hello World</p>
                    <div className="channelSource">
                        <img src="./whatsapp.png" alt="" className="sourceIcon" />
                        <p className="channelName">Whatsapp</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mehmet Bilgi</span>
                    <p>Hello World</p>
                    <div className="channelSource">
                        <img src="./whatsapp.png" alt="" className="sourceIcon" />
                        <p className="channelName">Whatsapp</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mehmet Bilgi</span>
                    <p>Hello World</p>
                    <div className="channelSource">
                        <img src="./whatsapp.png" alt="" className="sourceIcon" />
                        <p className="channelName">Whatsapp</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mehmet Bilgi</span>
                    <p>Hello World</p>
                    <div className="channelSource">
                        <img src="./whatsapp.png" alt="" className="sourceIcon" />
                        <p className="channelName">Whatsapp</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Mehmet Bilgi</span>
                    <p>Hello World</p>
                    <div className="channelSource">
                        <img src="./whatsapp.png" alt="" className="sourceIcon" />
                        <p className="channelName">Whatsapp</p>
                    </div>
                </div>
            </div>
            {addMode && <Adduser />}
        </div>
    )
}

export default Chatlist