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
        <h4 className="single-page-small-title">Furaveri Island</h4>
        <p>
          The island of Furaveri, situated in the exotic Raa Atoll near
          ‘Hanifaru Bay’ a UNESCO biosphere reserve, is 95 miles north of velana
          international airport and is easily accessible by a 45- minute scenic
          seaplane ride. Furaveri offers a variety of dining options from an
          international buffet to an Ala carte fusion Asian restaurant while
          being amused by soft music, live band, Maldivian night, Dj, Aqua
          night, and many more.
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
              <div>1,51,000 per couple only*</div>
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
                        Meet and Greet
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <ul>
                          <li>
                            Upon arrival at velena international airport
                            Maldives, Meet our representative at the airport for
                            Your smooth and scheduled transfer to your luxurious
                            hotel, Furaveri.
                          </li>
                          <li>
                            Take your mesmerizing seaplane transfer which will
                            give you a scenic view of Maldives, this 45 minutes
                            of travel will make your day before reaching your
                            resort. You are now ready to stay in a beautiful
                            beach villa for 2 nights.
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
                        Let Furaveri treat you as a special guest with their
                        top-notch hospitality and cuisine. A wide range of
                        motorized and non-motorized activities like Dolphin &
                        whale watching, Kayaking & canoeing, scuba, and
                        snorkeling will make your day full of adventures and
                        joy.
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
                        Pack your backpacks and get ready for another adventure
                        on your vacay. You will now be amazed by the luxurious
                        water villas of the Furaveri built in the turquoise
                        lagoon by a wooden walkway that appears to float on
                        ocean waves Thinking that this trip couldn't get more
                        romantic? wait ! why not go for a candlelight dinner
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
                        Leisure Day
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        The final day of your vacation must be the most
                        memorable day. Indulge yourself in different activities
                        such as paddle boats, windsurfing, catamaran sailing
                        etc. And in the evening take your better half for a
                        romantic sunset cruise .
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
                        Time to say goodbye and give your heart to the marvelous
                        maldivian hospitality and top notch services . Taking
                        some last bird eye view and freezing blue shots in your
                        eyes forever. it is the time you reach velana
                        international airport .
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
