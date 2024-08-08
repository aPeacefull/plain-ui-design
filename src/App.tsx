import React from "react";
import { GlobalStyle, themeLight } from "./lib/theme";
import { Placeholder, ButtonRectangular } from "./lib";
import { ThemeProvider } from "styled-components";
import { Icon } from "./lib/icon";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={themeLight}>
			<GlobalStyle />
			<main>
				<Placeholder text="Игеещты" />
				<ButtonRectangular text="Large primary enabled" appearance="primary" size="large" leadingElement={<Icon />} />
				
				
			</main>
		</ThemeProvider>
	);
}

export default App;
