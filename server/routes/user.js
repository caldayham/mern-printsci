const router = require("express").Router();
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

//UPDATE
router.put("/:id", verifyTokenAndAuth, async (req, res) => {

    console.log(req.params);

    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    try {

        const updatedUser = await User.findByIdAndUpdate((req.params.id) , {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json(err + "");
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuth, async (req, res) => {
   try {
       await User.findByIdAndDelete(req.params.id);
       res.status(200).json("user was successfully deleted");
   } catch (err) {
       res.status(500).json(err);
   } 
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
   try {
       const user = await User.findById(req.params.id);
       console.log(req.params);

       const { password, ...others } = user._doc;
       res.status(200).json({...others});
   } catch (err) {
       res.status(500).json(err);
   } 
});

//GET ALL USERS
router.get("/find", verifyTokenAndAdmin, async (req, res) => {

    const qNew = req.query.new
    const qNum = req.query.num

    console.log(req.query.num);

   try {
    const users = qNew ? await User.find().sort({ _id: -1 }).limit(qNum ? qNum : 2) : await User.find().limit(qNum ? qNum : 2);

       // remove encrypted password from the array of users
       console.log(users);

       res.status(200).json(users);

   } catch (err) {
       res.status(500).json(err); 
   } 
});

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: {$month: "$createdAt" }
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1},
                },
            }
        ])

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router; 