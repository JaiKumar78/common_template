import React, { useState } from "react";

const Popup = ({ details, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose} style={{color: 'red', fontSize: '3vh', fontWeight: 'bolder'}}>X</button>
        <h2>Details</h2>
        <div className="details-grid">
          {details.map((dayDetails, index) => (
            <div key={index} className="details-row">
              <p> {dayDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [popupDetails, setPopupDetails] = useState(null);

  const [detailsByWeek, setDetailsByWeek] = useState({
    "1:0": [
        "Digital Marketing",
        "(Gain Knowledge in Online Marketing, Content Creation, Social Media Management)"
      ],

      "1:1":[
        "Game Development",
        "(Basics, Unity Engine, Unreal Engine)"
      ],
      "1:2":[
        "Graphic Design",
        "(Exploring Graphic Design Software, Adobe Photoshop, Illustraator to Create Visual Content)"
      ],
      "1:3":[
        "CyberSecurity Basics",
        "(Basics, Ethical Hacking, Network Security, Secure Coding Practices)"
      ],
      "1:4":[
        "Mobile App Development",
        "(Basics, Android Platform Java/Kotlin, IOS Swift)"
      ],
      "2:0":[
        "Digital Marketing",
        "(Gain Knowledge in Online Marketing, Content Creation, Social Media Management)"
      ],
      "2:1":[
        "Game Development",
        "(Basics, Unity Engine, Unreal Engine)"
      ],
      "2:2":[
        "Graphic Design",
        "(Exploring Graphic Design Software, Adobe Photoshop, Illustraator to Create Visual Content)"
      ],
      "2:3":[
        "CyberSecurity Basics",
        "(Basics, Ethical Hacking, Network Security, Secure Coding Practices)"
      ],
      "2:4":[
        "Mobile App Development",
        "(Basics, Android Platform Java/Kotlin, IOS Swift)"
      ],
      "3:0":[
        "Digital Marketing",
        "(Gain Knowledge in Online Marketing, Content Creation, Social Media Management)"
      ],
      "3:1":[
        "Game Development",
        "(Basics, Unity Engine, Unreal Engine)"
      ],
      "3:2":[
        "Graphic Design",
        "(Exploring Graphic Design Software, Adobe Photoshop, Illustraator to Create Visual Content)"
      ],
      "3:3":[
        "CyberSecurity Basics",
        "(Basics, Ethical Hacking, Network Security, Secure Coding Practices)"
      ],
      "3:4":[
        "Mobile App Development",
        "(Basics, Android Platform Java/Kotlin, IOS Swift)"
      ],
      "4:0":[
        "Digital Marketing",
        "(Gain Knowledge in Online Marketing, Content Creation, Social Media Management)"
      ],
      "4:1":[
        "Game Development",
        "(Basics, Unity Engine, Unreal Engine)"
      ],
      "4:2":[
        "Graphic Design",
        "(Exploring Graphic Design Software, Adobe Photoshop, Illustraator to Create Visual Content)"
      ],
      "4:3":[
        "CyberSecurity Basics",
        "(Basics, Ethical Hacking, Network Security, Secure Coding Practices)"
      ],
      "4:4":[
        "Mobile App Development",
        "(Basics, Android Platform Java/Kotlin, IOS Swift)"
      ],
      "5:0":[
        "Digital Marketing",
        "(Gain Knowledge in Online Marketing, Content Creation, Social Media Management)"
      ],
      "5:1":[
        "Game Development",
        "(Basics, Unity Engine, Unreal Engine)"
      ],
      "5:2":[
        "Graphic Design",
        "(Exploring Graphic Design Software, Adobe Photoshop, Illustraator to Create Visual Content)"
      ],
      "5:3":[
        "CyberSecurity Basics",
        "(Basics, Ethical Hacking, Network Security, Secure Coding Practices)"
      ],
      "5:4":[
        "Mobile App Development",
        "(Basics, Android Platform Java/Kotlin, IOS Swift)"
      ]

  });
  
  const x = ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5']

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleViewDetails = (weekIndex) => {
    console.log(selectedWeek," ",weekIndex);
    const details = detailsByWeek[selectedWeek+":"+weekIndex];
    setPopupDetails(details);
  };

  const handleClosePopup = () => {
    setPopupDetails(null);
  };

  const dates = generateDates(selectedWeek);

  return (
    <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', padding:'2vh', background:'#fafafa', }}>
      <h2 style={{ fontSize: '3rem', background: 'linear-gradient(black, blue)', backgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>Syllabus</h2>
      <div style={{ overflowX: 'auto' }}>
  <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", }}>
    <thead>
      <tr>
        {[1, 2, 3, 4, 5].map((week) => (
          <th key={week} onClick={() => handleWeekChange(week)} style={{ padding: "10px", textAlign: "center", cursor: "pointer", backgroundColor: selectedWeek === week ? "#007BFF" : "whitesmoke", transition: "background-color 0.5s", minWidth: "100px" }}>
            {x[week - 1]}
          </th>
        ))}
      </tr>
    </thead>
  </table>
</div>


      <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", }}>
        <thead>
          <tr>
            {/* <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Date</th> */}
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Day</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Topics</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Topics</th>
          </tr>
        </thead>
        <tbody>
          {dates.map(( date, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "whitesmoke" }}>
              {/* <td style={{ border: "1px solid black", padding: "8px" }}>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}</td> */}
              <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5"][date.getDay()]}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Digital Marketing", "Game Development", "Graphic Design", "CyberSecurity Basics", "Mobile App Development"][date.getDay()]}</td>
              <td style={{ border: "1px solid black", padding: "8px"}}>
                <button onClick={() => handleViewDetails(index)} className="syllabus-link" style={{ display: "block", textAlign: "center", padding: "5px", textDecoration: "none", color: "#007BFF", cursor: "pointer", backgroundColor: "transparent", border: "none", transition: "background-color 0.3s",}}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupDetails && <Popup details={popupDetails} onClose={handleClosePopup} />}
    </div>
  );
};

export default Schedule;