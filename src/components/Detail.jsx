import React from "react";
import BodyPart from "../assets/icons/body-part.png";
import Target from "../assets/icons/target.png";
import Equipment from "../assets/icons/equipment.png";
import { Button, Stack, Typography } from "@mui/material";
const Detail = ({ exerciseDetail }) => {
  const { target, name, gifUrl, equipment, bodyPart } = exerciseDetail;
  const extraDetails = [
    { name: bodyPart, icon: BodyPart },
    { name: target, icon: Target },
    { name: equipment, icon: Equipment },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. <span style={{color:'orange'}}> {name} </span>{` `}
          is one of the best exercises to target your <span style={{color:'orange'}}> {target}</span>. It will help you
          improve your performance and gain energy.
        </Typography>
        {extraDetails.map((extra)=>(
          <Stack key={extra.name} direction='row' gap='24px' alignItems='center'>
            <Button sx={{borderRadius:'50%', width:'100px', height:'100px'}}>
              <img src={extra.icon} alt={extra.name} style={{width:'40px', height:'40px'}}/>
            </Button>
            <Typography textTransform='capitalize'>{extra.name}</Typography>
          </Stack>
      ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
