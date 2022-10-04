function likes(names) {
	let arrLikes = [...names];

	if (arrLikes.length === 0) console.log(`no one likes this`);

	if (arrLikes.length === 1) return `${arrLikes[0]} likes this`;

	if (arrLikes.length === 2)
		return `${arrLikes[0]} and ${arrLikes[1]} like this`;

	if (arrLikes.length === 3)
		return `${arrLikes[0]}, ${arrLikes[1]} and ${arrLikes[2]} like this`;

	if (arrLikes.length > 3)
		return `${arrLikes[0]}, ${arrLikes[1]} and ${
			arrLikes.length - 2
		} others like this`;
}

likes([]);
