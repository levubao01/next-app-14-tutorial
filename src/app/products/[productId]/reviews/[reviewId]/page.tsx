import { notFound } from 'next/navigation'
import React from 'react'

const ReviewDetail = ({ params }: { params: { productId: string; reviewId: string } }) => {
	if (parseInt(params.reviewId) > 10) {
		notFound()
	}
	return (
		<div>
			<h2>
				Review Detail {params.reviewId} for product {params.productId}
			</h2>
		</div>
	)
}

export default ReviewDetail
