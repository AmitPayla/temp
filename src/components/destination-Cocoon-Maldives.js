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
        <h4 className="single-page-small-title">You & Me by Cocoon Maldives</h4>
        <p>
          You and Me is a private, peasant, and romantic Island, in a beautiful,
          untouched corner of Maldives. A 5-star Hotel located in Raa Atoll,
          Northern Maldives. Experience a 45-minute scenic seaplane ride to
          reach the resort from velana international airport This adult-only
          resort specifically maintained for couples and honeymooner’s to relax,
          curl up and spend some quality ‘ us time ‘. You and Me will amaze you
          with the unique underwater restaurant with a variety of cuisine served
          in a style.
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
              <div>1,84,999 per couple only*</div>
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
                        Arrival
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <ul>
                          <li>
                            Upon arrival at velena international airport
                            Maldives, Meet our representative at the airport for
                            Your smooth and scheduled transfer to your luxurious
                            hotel, You & Me.
                          </li>
                          <li>
                            After arrival, you will be transferred to your
                            hotel, You & me, Via 45 minutes scenic seaplane
                            transfer. ( after check-in your ‘us ‘ time starts)
                            Post your meals it's the perfect time to take a dive
                            into the pool and let yourself sink in with nature.
                            You are scheduled to stay in a Beach villa category
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
                        Resort especially targeting couples will amaze you with
                        their hospitality and different variety of cuisine
                        prepared by world-class chefs. Enjoy your day with an
                        adventure of motorized and non - motorized water sports
                        activities.
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
                        Transfer to the water villa- Getting clicked with sharks
                        underwater
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        One of the special days of your special vacation will be
                        at the beautiful water villa awaiting a beautiful
                        couple. Mesmerize yourself in an underwater restaurant
                        that gives a 360-degree view of Maldives’ breathtaking
                        marine environment . Enjoy your day full of activities
                        and a beautiful scenic view of the resort with your
                        loved ones.
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
                        Time to gather lots of memories , pics and what not ? We
                        guess stories, love and romance . Time to say goodbye
                        with a promise to come again and take some last aerial
                        shots to get back to velana international airport.
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
