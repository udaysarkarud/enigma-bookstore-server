import { connect } from "mongoose";
import app from "./app";
import configEnv from "./config";

async function main() {
  try {
    await connect(
      "mongodb+srv://user_enigbo-db:CWHUUHT3XvmdQgf5@cluster0.x6o4r.mongodb.net/enigma-bookstore?retryWrites=true&w=majority"
    );

    app.listen(configEnv.port, () => {
      console.log(`Example app listening on port ${configEnv.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
