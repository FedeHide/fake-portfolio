import type { Metadata } from 'next'
import '../scss/main.scss'

export const metadata: Metadata = {
	title: 'Fake Personal Portfolio | freeCodeCamp',
	description: 'This is a fake portfolio, a freecodecamp assignment',
	openGraph: {
		url: 'https://fake-portfolio.vercel.app/',
		type: 'website',
		title: 'Fake Personal Portfolio | freeCodeCamp',
		description: 'This is a fake portfolio, a freecodecamp assignment',
		images: [
			'https://ogcdn.net/6064b869-74ed-4eb9-b76c-0b701ffe7e6b/v4/fedehide.github.io/Fake%20Personal%20Portfolio%20%7C%20freeCodeCamp/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F444dd598-5c1a-4876-84fa-a7f343428c29.png%3Ftoken%3Dwep4UKBaV60eV5FXRaDzzfMBGl7HdMkASBALScPTD9Y%26height%3D588%26width%3D1200%26expires%3D33241969681/og.png',
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: 'https://fake-portfolio.vercel.app/',
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
