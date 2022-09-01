require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
// ENV variables
const {
    env: { PORT },
} = process;

const express = require("express");
//
const { searchRoutes, latestRoutes, sourcesRoutes } = require("./routes");

const app = express();

app.use("/search", searchRoutes);
app.use("/latest_headlines", latestRoutes);
app.use("/sources", sourcesRoutes);

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
