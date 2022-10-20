export const replaceItemAtIndex = (
	arr: Array<any>,
	index: number,
	newValue: any
) => {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};
