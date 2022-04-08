import SectionHeading from "../SectionHeading"

const Roadmap = ({data }) => {

    return (

      <section className="roadmap section-padding-0-0" id="roadmap">
        <SectionHeading
          title="ICO Roadmap"
          text=""
          ClassSpanTitle="April 10 2022    Project Launch we BNB Staking with a daily return for our investors and a clear mathematical system that will allow to have a stable contract."
        />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                {data && data.map((item , key) => (
                  <div className="timeline" key={key}>
                    <div className="icon" />
                    <div className="date-content">
                      <div className="date-outer"> <span className="date"> <span className="month">{item.month}</span> <span className="year" style={{lineHeight:'55px',fontSize:'24px'}}>{item.year}</span> </span>
                      </div>
                    </div>
                    <div className="timeline-content">
                      <h5 className="title">{item.title}</h5>
                      <p className="description text-light-gray"> {item.text1}</p>
                      <p className="description text-light-gray"> {item.text2}</p>
                      <p className="description text-light-gray"> {item.text3}</p>
                      <p className="description text-light-gray"> {item.text4}</p>
                      <p className="description text-light-gray"> {item.text5}</p>
                      <p className="description text-light-gray"> {item.text6}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Roadmap