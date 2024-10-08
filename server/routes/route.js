const express = require("express");
// const uploadT = require('../middlewares/createTeam');
const upload = require("../middlewares/upload");
const router = express.Router();
// crate team
const { createTeam } = require("../controllers/addTeam");
// bhavesh
const {
  signUser,
  loginUser,
  getUser,
  editUserCaptain,
  addTeam,
} = require("../controllers/userController");
const {
  addSponsorType,
  getSponsorType,
  addFoodSpon,
  addOtherSpon,
  getFoodSpon,
  getOtherSpon,
  deleteSponsorType,
  deleteFoodSpon,
  deleteOtherSpon,
  editSponsorType,
  editFoodSponsor,
  editOtherSponsor,
  getSponsorById,
} = require("../controllers/sponsorController");
const {
  addAdvertise,
  getAdvertiser,
  deleteAdvertiser,
  editAdvertiser,
} = require("../controllers/advertiserCont");

router.post("/sign", signUser);
router.post("/login", loginUser);
router.get("/user", getUser);
router.patch("/editCaptain", editUserCaptain);

router.post("/sponsorType", addSponsorType);
router.get("/getSponsorType", getSponsorType);
router.get("/getSponsorType/:id", getSponsorById);
router.delete("/deletesponsortype/:id", deleteSponsorType);
router.patch("/sponsor-type/:id", editSponsorType);

router.post("/addFoodSpon", upload.single("spImage"), addFoodSpon);
router.get("/getFoodSpon", getFoodSpon);
router.delete("/food-sponser/:id", deleteFoodSpon);
router.patch("/food-sponser/:id", upload.single("spImage"), editFoodSponsor);

router.post("/addOtherSpon", upload.single("spOtherImage"), addOtherSpon);
router.get("/getOtherSpon", getOtherSpon);
router.delete("/other-sponser/:id", deleteOtherSpon);
router.patch(
  "/other-sponser/:id",
  upload.single("spOtherImage"),
  editOtherSponsor
);

router.post("/addAdvertise", upload.single("shopLogo"), addAdvertise);
router.get("/getAdvertise", getAdvertiser);
router.delete("/advertiser/:id", deleteAdvertiser);
router.patch("/advertiser/:id", upload.single("shopLogo"), editAdvertiser);

// router.post('/addsponsertype', addSptype);
router.get("/add", (req, res) => {
  res.send("Hello man");
});

router.post(
  "/addteam",
  upload.fields([
    { name: "logo", maxCount: 1 },
    ...Array(14)
      .fill()
      .map((_, i) => ({ name: `player${i + 1}Image`, maxCount: 1 })),
  ]),
  addTeam
);

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
