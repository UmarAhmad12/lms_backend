import { config } from "dotenv";
config(); // Load environment variables

import app from "./index.js"; // Import app after config() is called
import connectToDB from "./configs/dbConn.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  // Connect to DB
  await connectToDB();
  console.log(`App is running at http://localhost:${PORT}`);
});