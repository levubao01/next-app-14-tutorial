import React from 'react'

const DocsPage = ({ params }: { params: { slug: string[] } }) => {
	if (params.slug?.length === 2) {
		return (
			<h1>
				DocsPage {params.slug[0]} {params.slug[1]}
			</h1>
		)
	} else if (params.slug?.length === 1) {
		return <h1>DocsPage {params.slug[0]}</h1>
	} else {
		return <h1>DocsPage</h1>
	}
}

export default DocsPage
