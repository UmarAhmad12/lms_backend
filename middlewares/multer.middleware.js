import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const upload = multer({
  dest: "/tmp/uploads/", // Use /tmp for Vercel
  limits: { fileSize: 1 * 1024 * 1024 * 1024 }, // 1 GB limit
  storage: multer.diskStorage({
    destination: "/tmp/uploads/", // Use /tmp for Vercel
    filename: (_req, file, cb) => {
      const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  }),
  fileFilter: (_req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();

    if (
      ext !== ".jpg" &&
      ext !== ".jpeg" &&
      ext !== ".webp" &&
      ext !== ".png" &&
      ext !== ".mp4"
    ) {
      cb(new Error(`Unsupported file type! ${ext}`), false);
      return;
    }

    cb(null, true);
  },
});

export default upload;