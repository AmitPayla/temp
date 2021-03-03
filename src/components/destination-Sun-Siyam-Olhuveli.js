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
        <h4 className="single-page-small-title">Sun Siyam Olhuveli</h4>
        <p>
          Sun Siyam Olhuveli is a world-class resort that meets the Traditional
          Maldives with Modern Design structure, located in the south male
          atoll, with a 50-minute speedboat ride from the airport, Enjoy the
          wide range of accommodations from Maldivian-inspired suits to sleek
          contemporary villas perfectly designed to cater to your frame of mind.
          Elegantly decorated with wooden furnishing, the spacious well
          maintained rooms popularized specifically for guests willing to have a
          vacation with family. It all begins on the water, whether it is
          parasailing, kitesurfing, or diving, there are different ways to keep
          yourself active on this beautiful island Be amazed by outstanding
          cuisine with creative menus served across the selection of restaurants
          and bars, all prepared by world-class chefs.
        </p>
        <div>
          <div>
            <div></div>
            <div>
              <div>Places</div>
              <div>Male, 4N</div>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <div>Duration</div>
              <div>4 Night , 5 Days</div>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <div>Pricing</div>
              <div>1,37,000 per couple only*</div>
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
                        Meet and Greet at Airport
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <ul>
                          <li>
                            Upon arrival at velana international airport
                            Maldives, Meet our representative at the airport for
                            Your smooth and scheduled transfer to your luxurious
                            hotel Sun Siyam Olhuveli.
                          </li>
                          <li>
                            On arrival check-in to your luxurious beach villa,
                            Give your eyes a feast to see the blue world of
                            Maldives. In the evening go for a barefoot walk by
                            the beachside and let your feet touch the white soft
                            sand of Maldivian beaches. Here you will be staying
                            for two nights.
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
                        Let's begin a day full of activities with motorized and
                        non - motorized water sports available or take a guided
                        parasailing and kitesurfing trip in the tranquil waters.
                        Experience your top-notch service and amenities.
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
                        Transfer to the water villa
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Get ready for the most awaited part of the vacay, a stay
                        in a water villa category set up in the middle of the
                        ocean. The villa will amaze you with its scenic views
                        all along with wonderful facilities and services
                        provided by the staff.
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
                        On the water villas, You can try your hands on some
                        adventurous water sports activities and build your
                        unforgettable memories.
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
                  <div className="timeline-header">DAY 5</div>
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
                        Time to say goodbye to the Maldivian hospitality and
                        top-notch services with the stories and emotions you
                        have promise us to come back very soon. For one last
                        time take a speedboat to let yourself touch turquoise
                        waters one last time to get back to velana international
                        airport
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
