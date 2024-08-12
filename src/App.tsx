import React from "react";
import { GlobalStyle, themeLight } from "./lib/theme";
import { Placeholder, ButtonRectangular } from "./lib";
import styled, { ThemeProvider } from "styled-components";
import { Icon } from "./lib/icon";
import { Card } from "./lib";

 const StyledMain = styled.main`
	display: flex;
	flex-direction: row;
	background-color: #F4F3F1;
	gap: 52px;
	padding: 52px;
	heght: 100%;
 `;



function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={themeLight}>
			<GlobalStyle />
			<StyledMain>
			  <Card breakpoint="LM" text = "Building semantic Design System"/>
				<br />
				<Card breakpoint="S" text = "Building semantic Design System"/>
				
			</StyledMain>
		</ThemeProvider>
	);
}

export default App;
