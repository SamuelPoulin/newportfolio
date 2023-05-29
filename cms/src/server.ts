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

  const mongoUsername = process.env.MONGO_USERNAME;
  const mongoPassword = process.env.MONGO_PASSWORD;
  const mongoDatabase = process.env.MONGO_DATABASE;

  if (!mongoUsername || !mongoPassword || !mongoDatabase)
    throw new Error("Mongo options are not defined.");

  const mongoURL = `mongodb://${mongoUsername}:${mongoPassword}@mongo/${mongoDatabase}`;

  await payload.init({
    secret: payloadSecret,
    mongoURL,
    mongoOptions: {
      authSource: "admin",
    },
    express: app,
  });

  app.listen(3001);
};

start();
