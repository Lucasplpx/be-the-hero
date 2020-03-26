const { Router } = require("express");
const route = Router();

const Incident = require("./controllers/Incident");
const Ong = require("./controllers/Ong");
const Profile = require("./controllers/Profile");
const Session = require("./controllers/Session");

route.post("/sessions", Session.create);

route.get("/ongs", Ong.index);
route.post("/ongs", Ong.create);

route.get("/profile", Profile.index);

route.get("/incidents", Incident.index);
route.post("/incidents", Incident.create);
route.delete("/incidents/:id", Incident.delete);

module.exports = route;
