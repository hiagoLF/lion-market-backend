import { Request } from "express";
import multer from "multer";
import path from "path";
import { randomBytes } from "crypto";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
    filename: (req, file, cb) => {
      randomBytes(16, (err, hash) => {
        if (err) cb(err, file.filename);
        file.filename = `${hash.toString("hex")}.${file.originalname}`;
        cb(null, file.filename);
      });
    },
  }),

  s3: multerS3({
    s3: new aws.S3(),

    bucket: 'lion-market',
   
    contentType: multerS3.AUTO_CONTENT_TYPE,

    acl: "public-read",

    key: (req, file, cb) => {
      randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const fileName = `${hash.toString("hex")}-product.${file.mimetype.split('/')[1]}`;
        cb(null, fileName);
      });
    },
  }),
};

const multerConfig = {
  dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),

  storage: storageTypes["s3"],

  limits: {
    // 0.5 MB
    fileSize: 1 * 1024 * 1024,
  },

  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    const allowedMimeTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      cb(null, false);
    }

    cb(null, true);
  },
};

export const uploadImageMiddleware =
  multer(multerConfig).single("productImage");
