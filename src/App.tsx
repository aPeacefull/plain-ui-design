import React from "react";
import { GlobalStyle, themeLight } from "./lib/theme";
import { Placeholder, ButtonRectangular } from "./lib";
import { ThemeProvider } from "styled-components";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={themeLight}>
			<GlobalStyle />
			<main>
				<Placeholder text="Primary button!" />
				<ButtonRectangular text="Large primary enabled" appearance="primary" size="large" />
				<ButtonRectangular text="Large primary disabled" appearance="primary" size="large" disabled />
				<ButtonRectangular text="Base primary enabled" appearance="primary" size="base" />
				<ButtonRectangular text="Base primary disabled" appearance="primary" size="base" disabled />

				<Placeholder text="Secondary button!" />
				<ButtonRectangular text="Large secondary enabled" appearance="secondary" size="large" />
				<ButtonRectangular text="Large secondary disabled" appearance="secondary" size="large" disabled />
				<ButtonRectangular text="Base secondary enabled" appearance="secondary" size="base" />
				<ButtonRectangular text="Base secondary disabled" appearance="secondary" size="base" disabled />

				<Placeholder text="Destructive button!" />
				<ButtonRectangular text="Large destructive enabled" appearance="desctructive" size="large" />
				<ButtonRectangular text="Large destructivey disabled" appearance="desctructive" size="large" disabled />
				<ButtonRectangular text="Base destructive enabled" appearance="desctructive" size="base" />
				<ButtonRectangular text="Base destructive disabled" appearance="desctructive" size="base" disabled />
				
			</main>
		</ThemeProvider>
	);
}

export default App;
