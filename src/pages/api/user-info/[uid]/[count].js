export default function handler(req, res) {
	const {uid, count} = req.query;
	const cookies = req.cookies;
	res.status(200).json({name: `Lofo ${uid} ${count} ${JSON.stringify(cookies)}`})
}
