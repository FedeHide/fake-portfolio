export default function Header(): JSX.Element {
	return (
		<header className="header" id="navbar">
			<a href="#" className="logo">
				Wolcabim
			</a>
			<nav className="navbar">
				<a href="#welcome-section">Home</a>
				<a href="#projects">Work</a>
				<a href="#contact">Contact</a>
			</nav>
		</header>
	)
}
