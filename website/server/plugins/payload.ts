import payload from "payload";

console.log(window);

export default defineNitroPlugin((nitroApp) => {
  console.log("Initializing payload...");

  const secret = process.env.PAYLOAD_SECRET;
  if (!secret) throw new Error("Payload secret is not defined.");

  // payload.init({
  //   secret,
  //   mongoURL: `mongodb://mongo/portfolio`,
  //   express: nitroApp.h3App,
  // });
});
