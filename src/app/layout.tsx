import type { Metadata } from 'next'
import '../scss/main.scss'

export const metadata: Metadata = {
	title: 'Fake Personal Portfolio | freeCodeCamp',
	description: 'This is a fake portfolio, a freecodecamp assignment',
	openGraph: {
		url: 'https://fake-portfolio-sigma.vercel.app/',
		type: 'website',
		title: 'Fake Personal Portfolio | freeCodeCamp',
		description: 'This is a fake portfolio, a freecodecamp assignment',
		images: [
			'https://raw.githubusercontent.com/FedeHide/fake-portfolio/main/public/assets/fake-portfolio-screenshot.webp',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://fake-portfolio-sigma.vercel.app/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
