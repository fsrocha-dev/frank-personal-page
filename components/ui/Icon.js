import * as React from 'react'
export default function Icon({name, top = 0, right = 0, bottom = 0, left = 0}) {
	const iconStyle = {
		fontSize: '20px',
		position: 'relative',
		top: `${top}px`,
		left: `${left}px`,
		right: `${right}px`,
		bottom: `${bottom}px`
	}

  return <i className={name} style={iconStyle} />
}
