import React, { useEffect, useState } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "normal",
    color: "#333333",
  },
}));

const Accordion = withStyles({
  root: {
    borderBottom: "1px solid rgb(0, 120, 162 , 0.4)",
    // borderTop: '1px solid rgb(0, 120, 162 , 0.4)',
    boxShadow: "none",
    padding: "5px 2px",
    borderRadius: "0px",
    // backgroundColor : "blue"
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#fff",
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "5px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    // backgroundColor : 'yellow'
  },
}))(MuiAccordionDetails);

function NokuMaldives({ dest }) {
  const classes = useStyles();
  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <>
      <div>
        <h4 className="single-page-small-title">Hard Rock Maldives</h4>
        <p>
          Discover The Marina @ CROSSROADS showcasing the legendary Hard Rock
          Cafe, The Maldives first extraordinary multi-island fully integrated
          leisure destination. Nestled amongst the breathtakingly exotic Kaafu
          Atoll. Hard rock hotel Maldives is perfectly located & just a
          15-minute speedboat ride from Velana International Airport and Malé
          making transfers and day trip Frequent and easy. Hard Rock Hotel
          Maldives is Known for its Spacious rooms and is Recommendable for
          families as it offers a kids club and teen programmes with various
          beach activities It has different dining multi speciality restaurants
          with a breathtaking oceanfront view.
        </p>
        <div>
          <div>
            <div></div>
            <div>
              <div>Places</div>
              <div>Male, 3D</div>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <div>Duration</div>
              <div>3 Night , 4 Days</div>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <div>Pricing</div>
              <div>84,999 per couple only*</div>
            </div>
          </div>
        </div>
        <div className="package-included-area">
          <h4 className="single-page-small-title">Inclusion</h4>
          <span className="row">
            {dest && dest.includedInPackage && dest.includedInPackage.length > 0
              ? dest.includedInPackage.map((pack, index) => (
                  <React.Fragment key={pack._id}>
                    {pack.isChecked && (
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-package-included">
                          <img
                            src={publicUrl + "assets/img/icons/15.png"}
                            alt="icons"
                          />
                          <h6>{pack.name}</h6>
                          <p>{pack.fieldValue}</p>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))
              : null}
          </span>
        </div>
        <div className="package-included-location">
          <h4 className="single-page-small-title">Your Itinerary</h4>
          <div className="row">
            {dest && dest.itenary && dest.itenary.length > 0 ? (
              dest.itenary.map((itenary, index) => (
                <React.Fragment key={itenary._id}>
                  {
                    <div className="col-lg-4 col-md-4">
                      <div className="single-blog">
                        <div className="p-list">
                          <div className="list">{index + 1}</div>
                          <p>Day {index + 1}</p>
                        </div>
                        <div className="thumb">
                          <img
                            src={publicUrl + "assets/img/blog/8.png"}
                            alt="blog"
                          />
                        </div>
                        <div className="single-blog-details">
                          <h4 className="title">{itenary.title}</h4>
                          <p className="content">{itenary.description}</p>
                          {/*  <a className="btn-read-more" href="#"><span>Show More<i className="la la-arrow-right" /></span></a> */}
                        </div>
                      </div>
                    </div>
                  }
                </React.Fragment>
              ))
            ) : (
              <p>No Itenary</p>
            )}
          </div>
        </div>
        <div className="host-area">
          <div>Day-wise</div>
          <div className="single-host-wrap ">
            <Timeline align="">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="red" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline-header">DAY 1</div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography className={classes.heading}>
                        Beach villa
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <ul>
                          <li>
                            Upon arrival at velana international airport
                            Maldives, Meet our representative at the airport for
                            Your smooth and scheduled transfer to your luxurious
                            hotel, Hard Rock.
                          </li>
                          <li>
                            After check-in at the resort your time to relax and
                            enjoy starts, you are scheduled to spend two nights
                            in a beach villa.
                          </li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="red" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline-header">DAY 2</div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Leisure Day
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        It is time to relax where you can play some exciting
                        water sports and enjoy the exciting view of your resort.
                        It has In house Dj and musicians. Plenty of games
                        available for you near the beach like crab race open
                        movie screening and also you can opt for a romantic
                        candlelight dinner
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="red" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline-header">DAY 3</div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        {" "}
                        Transfer to water villa- The secluded life
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Try your new and one of a kind stay for today. Head to
                        experience the best part of your trip. Gear up for a
                        stay right in the middle of the ocean. Considered the
                        ultimate overwater luxury, these villas are perfect for
                        a peaceful getaway. On this peaceful getaway, relax your
                        mind and body with a rejuvenating session at the hotel.
                        You can also enjoy snorkelling to get mesmerized by the
                        marine life and Turquoise blue waters.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="red" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline-header">DAY 4</div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Departure
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        It's time to say goodbye to your hotel and head yourself
                        towards the Airport with a bundle of beautiful memories
                        that you have made.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default NokuMaldives;
