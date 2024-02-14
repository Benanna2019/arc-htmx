import arc from "@architect/functions";
import multipart from "lambda-multipart-parser";
import crypto from "crypto";
import data from "@begin/data";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const env = process.env.ARC_ENV;
const isLocal = env === "testing";
const staticDir = process.env.ARC_STATIC_BUCKET;
const imageFolder = ".uploaded-images";
const REGION = process.env.AWS_REGION;
import { html } from "@architect/shared/html-helper.mjs";
// import { resize } from "./resize-image.mjs"

export const handler = arc.http.async(uploadImage);

async function uploadImage(req) {
  //   // remove profile meta data from session
  //   const { profileSubmitToken, ...newSession } = req.session;

  //   console.log("req", req);
  //   const submitting = await data.get({
  //     table: "token",
  //     key: profileSubmitToken,
  //   });

  //   console.log("submitting", submitting);
  //   if (submitting.length) {
  //     return {
  //       session: { ...req.session, profileSubmitToken },
  //       html: html`<p>
  //         You've already submitted a profile. Please wait for approval.
  //       </p>`,
  //     };
  //   }

  // const ttl = Date.now() / 1000 + 60 * 60 * 24 * 1; // One day
  // await data.set({ table: "token", key: profileSubmitToken, ttl });

  const parsedForm = await multipart.parse({ ...req, body: req.rawBody });

  // Get uploaded image

  const unprocessed = parsedForm.files?.find(
    (file) => file.fieldname === "productImage"
  );
  const productPicture = unprocessed.content;

  // Save the image to S3 bucket (or temp folder for local dev)
  const filename = crypto.randomUUID();
  if (isLocal) {
    const { writeFileSync, mkdirSync } = await import("fs");
    const { join } = await import("path");
    const { default: url } = await import("url");
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const imageDir = join(__dirname, "..", "..", "..", imageFolder);
    try {
      mkdirSync(imageDir);
    } catch (e) {}
    writeFileSync(join(imageDir, filename + ".jpeg"), productPicture);
  } else {
    const client = new S3Client({ region: REGION });
    const command = new PutObjectCommand({
      Bucket: staticDir,
      Key: `${imageFolder}/${filename}`,
      Body: productPicture,
    });
    await client.send(command);
  }

  let processedImageHTML = html`
    <div id="processedImageDiv">
      <img
        src="/images/${filename}.jpeg"
        alt="product picture"
        class="uploadedImage"
      />
      <input
        type="hidden"
        name="productImage"
        id="uploadedProductImageUrl"
        value="${filename}"
      />
    </div>
  `;

  return {
    // session: { ...newSession },
    html: processedImageHTML,
  };
}
