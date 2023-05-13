export const dateFormat = (
	unFormatedData: string,
	withSecond: boolean = false
): { date: string; time: string } => {
	const [date, time] = unFormatedData.split('T')

	const readableDate = date.split('-').reverse().join('.')

	let readableTime

	if (withSecond) {
		readableTime = time.split('.')[0]
	} else {
		const doSecond = time.lastIndexOf(':')
		readableTime = time.substring(0, doSecond)
	}

	return { date: readableDate, time: readableTime }
}
