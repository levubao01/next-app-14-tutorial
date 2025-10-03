import { Metadata } from 'next'
import React from 'react'

type ProductDetailProps = {
	params: {
		productId: string
	}
}

export const generateMetadata = async ({ params }: ProductDetailProps): Promise<Metadata> => {
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`Product ${params.productId}`)
		}, 1000)
	})
	return {
		title: title as string,
		description: `Product ${params.productId} description`,
	}
}

const ProductDetail = ({ params }: ProductDetailProps) => {
	return <div>ProductDetail {params.productId}</div>
}

export default ProductDetail
