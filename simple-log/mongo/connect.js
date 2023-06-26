import mongoose from "mongoose";

const connect = () => {
    mongoose
      .connect(process.env.URL)
      .then(() => console.log("Db connected"))
      .catch((err) => console.log(err));
};

export default connect;
  