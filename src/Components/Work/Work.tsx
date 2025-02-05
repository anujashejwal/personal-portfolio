import "./Work.css";
export default function Work(){
    return(
        <div className="workpage">
            <h1>PROJECTS</h1>
            <p className="head-para">Hi All, Take a look at my UI/UX projects, case studies and Final Designs</p>
            <div className="design-boxes">
                <div className="design-1">
                    <h2>Plant nursery</h2>
                    <p>A plant nursery app is a digital platform designed to help users manage and explore plant care.</p>
                    <img src="../images/work1.png" className="design-img"/>
                </div>
                <div className="design-1">
                    <h2>Shopping Cart Sample</h2>
                    <p>A food delivery app is a digital platform that allows users to browse and order food from local restaurants.</p>
                    <img src="../images/work2.png" className="design-img"/>
                </div>
            </div>  
            <div className="design-boxes">
                <div className="design-1">
                    <h2>Smart Device Management</h2>
                    <p>Smart Device Mobile App simplifies home product management.</p>
                    <img src="../images/work3.png" className="design-img"/>
                </div>
                <div className="design-1">
                    <h2>Footwear Shopping App</h2>
                    <p>The online footwear app lets users browse shoes and gets delivered easily.</p>
                    <img src="../images/work4.png" className="design-img"/>
                </div>
            </div>  
            
        </div>
    )

}