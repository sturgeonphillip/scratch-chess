import { render } from 'react'

const App = () => {

	return (
		<>
		<h1>App!</h1>
		</>
	)
}

render(
	// <StrictMode>
		<App />,
	// </StrictMode>,
	document.getElementById("root")
);