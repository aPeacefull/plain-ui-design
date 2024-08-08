import React, { FC, ReactNode } from "react";
import styled from "styled-components";


export type TAppearance = "primary" | "secondary" | "desctructive" | "inverse";

export interface IButtonRectangularProps {
  appearance?: TAppearance;
  disabled?: boolean;
  loading?: boolean;
  text?: string;
  size?: "base" | "large";
  leadingElement?: ReactNode;
  trailingElement?: ReactNode;
}

export const StyledButtonRectangular = styled.button<IButtonRectangularProps>`
  border: none;
  border-radius: ${(props) => props.theme.cornerRadius.base};
  font-size:  ${(props) => props.theme.typography.fontSize.label};
  font-weight:  ${(props) => props.theme.typography.fontWeight.medium};
  line-height: ${(props) => props.theme.typography.lineHeight.label};
  display: inline-flex;
  gap: ${(props) => props.theme.spacing.related};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  padding: ${(props) => props.theme.padding.noPadding} ${(props) => props.theme.padding.base};
  cursor: pointer;  

  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.shadow.focus};
  }

  ${props => 
    props.size === "base" && 
    `
      height: ${props.theme.height.base};
      min-width: 56px;

 `}   

  ${props => 
    props.size === "large" && 
    `
      height: ${props.theme.height.large};
      min-width: 64px;

  `}    

  ${props => 
      props.appearance === "primary" && 
      `
      &:enabled {
        background-color: ${props.theme.color.background.extentions.accent};
        color: ${props.theme.color.content.extentions.primaryOnColor};
      }

      &:hover {
        background-color: ${props.theme.color.background.extentions.accentStateActive};
        color: ${props.theme.color.content.extentions.primaryOnColor};
      }

    &:focus {
      outline: none;
      box-shadow: ${props.theme.shadow.focus};
    }

      &:active {
        background-color: ${props.theme.color.background.extentions.accentStateActive};
        color: ${props.theme.color.content.extentions.primaryOnColor};
      }
  `}

  ${props => 
    props.appearance === "secondary" && 
    `
    &:enabled {
      background-color: ${props.theme.color.background.extentions.component};
      color: ${props.theme.color.content.primary};
    }

    &:hover {
      background-color: ${props.theme.color.background.extentions.stateActive};
      color: ${props.theme.color.content.primary};
    }

  &:focus {
    outline: none;
    box-shadow: ${props.theme.shadow.focus};
  }

    &:active {
      background-color: ${props.theme.color.background.extentions.stateActive};
      color: ${props.theme.color.content.primary};
    }

  `}

  ${props => 
    props.appearance === "desctructive" && 
    `
    &:enabled {
      background-color: ${props.theme.color.background.extentions.mediumNegative};
      color: ${props.theme.color.content.extentions.primaryOnColor};
    }

    &:hover {
      background-color: ${props.theme.color.background.extentions.negative};
      color: ${props.theme.color.content.extentions.primaryOnColor};
    }

  &:focus {
    outline: none;
    box-shadow: ${props.theme.shadow.focus};
  }

    &:active {
      background-color: ${props.theme.color.background.extentions.negative};
      color: ${props.theme.color.content.extentions.primaryOnColor};
    }

  `}

  ${props => 
    props.disabled && 
    `
      &:disabled {
      background-color: ${props.theme.color.background.extentions.stateDisabled};
      color: ${props.theme.color.content.extentions.stateDisabled};
      cursor: not-allowed;
      }

  `}

`;



export const ButtonRectangular : FC<IButtonRectangularProps> = ({
  appearance = "primary", 
  text = "ButtonLabel",
  size = "base",
  disabled,
  leadingElement,
  trailingElement,
}) => {
  return (
    <StyledButtonRectangular 
    text={text} 
    appearance={appearance} 
    size={size} disabled={disabled} 
    leadingElement={leadingElement} 
    trailingElement={trailingElement}>
      {text}
    </StyledButtonRectangular>
  );
}