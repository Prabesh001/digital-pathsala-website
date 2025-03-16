"use client"
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaArrowRight } from "react-icons/fa6";

export default function ControlledAccordions({ data }) {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <h5 className="text-xl font-semibold mb-4">Course Syllabus</h5>

      <div className="flex flex-col gap-y-1">
        {Object.keys(data)?.map((item, i) => (
          <Accordion
            slotProps={{ transition: { timeout: 500, unmountOnExit: true } }}
            key={i}
            expanded={expanded === i}
            onChange={handleChange(i)}
          >
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${i}bh-content`}
              id={`panel${i}bh-header`}
              sx={{
                backgroundColor: expanded === i ? "#f8f9fa" : "transparent",
                color: expanded === i ? "black" : "inherit",
                borderBottom: expanded === i ? "1px solid lightgray" : "inherit",
              }}
            >
              <Typography
                component="span"
                className="capitalize"
                sx={{ flexShrink: 0 }}
              >
                {item.replaceAll("_", " ")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col gap-y-2">
              {data[item].map((tuple, i) => (
                <div key={i} className="flex gap-3">
                <FaArrowRight size={15} className="mt-1 flex-shrink-0" />
                <Typography className="leading-normal">{tuple}</Typography>
              </div>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}
