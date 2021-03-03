import React, { useEffect, useState } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { makeStyles , withStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'normal',
    color: '#333333'
  },
}));

const Accordion = withStyles({
  root: {
    borderBottom: '1px solid rgb(0, 120, 162 , 0.4)',
    // borderTop: '1px solid rgb(0, 120, 162 , 0.4)',
    boxShadow: 'none',
    padding : '5px 2px',
    borderRadius : '0px'
    // backgroundColor : "blue"
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#fff',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },

  },
  content: {
    '&$expanded': {
      margin: '5px 0',
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
        <h4 className="single-page-small-title">
          Noku Maldives A Japanese Pride
        </h4>
        <p>
          Noku, a 5-star hotel situated across the soft powdery shores and
          crystal clear waters, located in Noonu Atoll, Experience a 45-minute
          scenic seaplane ride to reach the resort from Velana international
          airport. The property offers comfort, space, and serenity. A perfect
          vacation spot surrounded by untouched reefs, turquoise water, all set
          to provide the feel of luxury to all its guests. Noku also offers an
          inspiring array of premier spa treatments in sacred sequence with your
          needs in mind. Top-notch hospitality and services are the point of
          attraction in Noku.
        </p>
        <div>
          <div>
            <div></div>
            <div>
              <div>Places</div>
              <div>Male, 5D</div>
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
              <div>2,19,999 per couple only*</div>
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
                  <TimelineDot color='red'/>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline-header" >DAY 1</div>
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
                            After arrival at the Velena international airport
                            Meet our representative at the airport for Your
                            smooth and scheduled transfer to your luxurious
                            Resort, Noku.
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
                  <TimelineDot color='red'/>
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
                        It’s time to get a new experience every day. You can
                        choose a spa, a holistic treatment made from strong
                        elements of nature. Make your day full of adventure and
                        play exciting water sports and enjoy your beautiful view
                        from your resort.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot  color='red'/>
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
                        Water villa
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        You will be shifting to the water villa. Located right
                        in the middle of the ocean. Enjoy the elegance of the
                        villas surrounded by water and walk barefoot by the side
                        of the beach and feel the white sand and you can choose
                        for a special candlelight dinner.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='red' />
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
                        It's time to pack your bags with beautiful memories that
                        you have created and say goodbye to the marvelous
                        hospitality of the resort
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
