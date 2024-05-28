import express from "express";
import payload from "payload";
import cors from "cors";

const app = express();

app.use(cors());

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  const payloadSecret = process.env.PAYLOAD_SECRET;
  if (!payloadSecret) throw new Error("Payload secret is not defined.");

  await payload.init({
    secret: payloadSecret,
    express: app,
  });

  app.listen(3001);
};

start();
