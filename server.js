import { v2 } from "cloudinary";
import Razorpay from "razorpay";
import connectToDB from "./configs/dbConn.js";

// Cloudinary configuration
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Import app after configurations to avoid circular dependency
import app from "./index.js"; 

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectToDB();
  console.log(`App is running at http://localhost:${PORT}`);
});
