export default () => {
	return {type: 'INC' }
}

export default () => {
	return { type: 'DEC' }
}

export default (e) => {
	return { 
     type: 'STEP_CHANGED',
     payload: e.target.value
	}
}