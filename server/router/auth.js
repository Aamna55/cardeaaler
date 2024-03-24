const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../database/conn');
// const User = require('../models/userSchema');
// const Admin = require('../models/adminSchema');
// const Salecar = require('../models/salecarSchema');
// const Cart = require('../models/cartSchema');
// const Rentcar = require('../models/rentcarSchema');
// const Rentcart = require('../models/rentcartSchema');
// const Salecarincomes = require('../models/saleCarIncomeSchema');
// const Rentcarincomes = require('../models/rentCarIncomeSchema');
// const Salecarreviews = require('../models/carreviewSchema');
// const Rentcarreviews = require('../models/rentcarreviewSchema');

router.get('/', (req, res) =>{
    res.send('home page router')
});


// Client Side Modules ---for-- SignIn, SignUp, SignOut, Contactform
router.use(require('../clientsidemodules/signup'))
router.use(require('../clientsidemodules/signin'))
router.use(require('../clientsidemodules/signout'))
router.use(require('../clientsidemodules/getdata'))
router.use(require('../clientsidemodules/contactform'))

// Client Side Modules ---for-- Sale Cars
router.use(require('../clientSideModules/displayallsalecars'))
router.use(require('../clientSideModules/exploreallsalecars'))
router.use(require('../clientSideModules/salecarsearch'))
router.use(require('../clientSideModules/reviewsforsalecars'))
router.use(require('../clientSideModules/addtocartforsalecars'))
router.use(require('../clientSideModules/displaysalecartdata'))
router.use(require('../clientSideModules/deletesalecartitem'))
router.use(require('../clientSideModules/paymentmethodsalecars'))
router.use(require('../clientSideModules/updatedbaftersoldcar'))

// Admin Side Modules---for--- SignIn, SignOut
router.use(require('../adminsidemodules/signinadmin'))
router.use(require('../adminsidemodules/signoutadmin'))
router.use(require('../adminSideModules/getadmindata'))

// Admin Side Modules---for--- Users
router.use(require('../adminsidemodules/deleteuser'))
router.use(require('../adminsidemodules/getallusers'))
router.use(require('../adminsidemodules/deletemessage'))


module.exports = router;