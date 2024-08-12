import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { ButtonRectangular } from "../button";

export type Tbreakpoint = "LM" | "S";

export interface ICardProps {
  breakpoint?: Tbreakpoint;
  imagePath?: string;
  text?: string;
  title?: string;
  buttonText?: string;
}

export const StyledCard = styled.div<ICardProps>`
  background-color: ${(props) => props.theme.color.background.primary};
  color: ${(props) => props.theme.color.content.primary};


  ${props => 
    props.breakpoint=== "LM" && 
    `
      display: flex; 
      box-sizing: border-box; 
      flex-direction: column;
      gap: 32px;
      width: 376px;
      border-radius: 32px;
      box-shadow: none;
      cursor: pointer;
 `}   

   ${props => 
    props.breakpoint=== "S" && 
    `
      display: flex; 
      box-sizing: border-box; 
      flex-direction: row-reverse;
      gap: 24px;
      width: 375px;
      height: 180px;
      border-radius: 16px;
      box-shadow: none;
      cursor: pointer;
 `} 
 

`;

export const StyledCardContentContainer = styled.div<ICardProps>`

  ${props => 
    props.breakpoint=== "LM" && 
    `
      display: flex;
      gap: 24px;
      flex-direction: column;
      padding: 20px 32px 0px 20px;

 `}   

   ${props => 
    props.breakpoint=== "S" && 
    `
      display: flex;
      justify-content: space-between;
      flex-direction: column-reverse;
      padding: 20px 20px 20px 0px;

 `}   


  

`;

export const StyledCardButtonContainer = styled.div<ICardProps>`
  gap: 16px;
  display: flex;
  flex-direction: row;

`;

export const StyledCardTextContainer = styled.div<ICardProps>`
  gap: 4px;
  display: flex;
  flex-direction: column;
`;

export const StyledCardHeading = styled.h4<ICardProps>`
${props => 
  props.breakpoint=== "LM" && 
  `
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
    letter-spacing: -0.24px;
`}   
${props => 
  props.breakpoint=== "S" && 
  `
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    letter-spacing: -0.18px;
`}   
`;

export const StyledCardText = styled.p<ICardProps>`

${props => 
  props.breakpoint=== "LM" && 
  `
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    ыline-height: 24px; /* 150% */
`}  
${props => 
  props.breakpoint=== "S" && 
  `
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px; /* 150% */
    letter-spacing: -0.3px;
`}  
`;

export const StyledCardArtworkContainer = styled.div<ICardProps>`



 ${props => 
    props.breakpoint=== "LM" && 
    `
      display: flex;
      border-radius: 16px 16px 32px 32px;
      height: 300px;
      overflow: hidden;

 `}   

 ${props => 
  props.breakpoint=== "S" && 
  `
    display: flex;
    width: 140px;
    height:100%;
    border-radius: 16px;
    overflow: hidden;

`}   
 
`;

export const Card  : FC<ICardProps> = ({
  breakpoint = "LM",
  imagePath = "https://upload.wikimedia.org/wikipedia/commons/f/fb/Dalaja-Doll-norv%C3%A9gien-ambre-blotched-tabby_avec-blanc.jpg",
  text = "Building semantic Design System",
  title = "for Teamcheck",
  buttonText = "See more"
}) => {
  return (
    <StyledCard breakpoint={breakpoint}>
      <StyledCardContentContainer breakpoint={breakpoint}>

        <StyledCardButtonContainer>
          <ButtonRectangular text={buttonText} appearance="secondary" size={breakpoint == "LM" ? "large" : "base"} />
        </StyledCardButtonContainer>

        <StyledCardTextContainer>
            <StyledCardText breakpoint={breakpoint}>
              {text}
            </StyledCardText>
            <StyledCardHeading breakpoint={breakpoint}>
              {title}
            </StyledCardHeading>
        </StyledCardTextContainer>

      </StyledCardContentContainer>

      <StyledCardArtworkContainer breakpoint={breakpoint}>
        <img src={imagePath} />
      </StyledCardArtworkContainer>

    </StyledCard>
  )
}