import "./Work.css";
export default function Work() {
    return (
        <div className="workpage">
            <h1>PROJECTS</h1>
            <p className="head-para">UI/UX projects, case studies and Final Designs</p>
            
            <div className="design-container">
                <div className="design-row">
                    <div className="design-1"
                    onClick={() => window.open("https://www.behance.net/gallery/218993959/Mental-Wellness-Companion-App", "_blank")}
                    style={{ cursor: "pointer" }}>
                        <h2>Mental Wellness Companion App</h2>
                        <p>A mindfulness app for stress relief, meditation, and mental well-being.</p>
                        <img src="../images/work0.png" className="design-img" alt="MWCApp" />
                    </div>
                    <div className="design-1"
                    onClick={() => window.open("https://www.behance.net/gallery/203790083/Cart-and-Payment-Mobile-UI", "_blank")}
                    style={{ cursor: "pointer" }}>
                        <h2>Shopping Cart Sample</h2>
                        <p>A food delivery app is a digital platform that allows users to browse and order food from local restaurants.</p>
                        <img src="../images/work2.png" className="design-img" alt="Shopping Cart Sample" />
                    </div>
                </div>
                <div className="design-row">
                    <div className="design-1"
                    onClick={() => window.open("https://www.behance.net/gallery/207031467/Smart-Home-Device-Dashboard", "_blank")}
                    style={{ cursor: "pointer" }}>
                        <h2>Smart Device Management</h2>
                        <p>Smart Device Mobile App simplifies home product management.</p>
                        <img src="../images/work3.png" className="design-img" alt="Smart Device Management" />
                    </div>
                    <div
    className="design-1"
    onClick={() => window.open("https://www.behance.net/gallery/203006299/Login-or-Signup-Page", "_blank")}
    style={{ cursor: "pointer" }}
>
    <h2>Plant Nursery</h2>
    <p>A plant nursery app is a digital platform designed to help users manage and explore plant care.</p>
    <img src="../images/work1.png" className="design-img"/>
</div>

                </div>
            </div>
        </div>
    );
}
