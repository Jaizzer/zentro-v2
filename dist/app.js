// Setup the server
import express from "express";
const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
	console.log(req);
	console.log("This is a test page for deployment");
	res.send("<h1>Page deployment test</h1>");
});

app.listen(PORT, (error) => {
	if (error) {
		console.error(`Failed to start server: ${error}`);
	} else {
		const baseUrl = `http://localhost:${PORT}`;
		console.log(`Server is listening on: ${baseUrl}`);
	}
});
