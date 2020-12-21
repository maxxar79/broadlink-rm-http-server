const port = 1880;
const key = "SECRET_KEY";

const rooms = [];
rooms["tvroom"] = {
  host:"192.168.2.90",
  groups: [
    "tv",
    "amplifier",
  ]
};

const commands = [
  {
    "command":"power_on",
    "group":"amplifier",
    "data":"DATA_HERE"
  }
];

module.exports = {
  port,
  key,
  rooms,
  commands,
}