"use strict";

const router = require("express").Router();
const ZarinpalCheckout = require("zarinpal-checkout");
require("dotenv").config();

var zarinpal = ZarinpalCheckout.create(process.env.ZARIN_KEY, true);

// @return {String} URL [Payement Authority]
router.get("/PaymentRequest", function (req, res) {
  zarinpal
    .PaymentRequest({
      Amount: "1000",
      CallbackURL: "http://siamak.us",
      Description: "Hello NodeJS API.",
      Email: "hi@siamak.work",
      Mobile: "09120000000",
    })
    .then(function (response) {
      if (response.status == 100) {
        res.redirect(response.url);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

/**
 * Route: PaymentVerification [module]
 * @return {number} RefID [Check Paymenet state]
 */
router.get("/PaymentVerification/:amount/:token", function (req, res) {
  zarinpal
    .PaymentVerification({
      Amount: req.params.amount,
      Authority: req.params.token,
    })
    .then(function (response) {
      if (response.status == 101) {
        console.log("Verified! Ref ID: " + response.RefID);
      } else {
        console.log(response);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

/**
 * Route: UnverifiedTransactions [module]
 * @return {Object} authorities [List of Unverified transactions]
 */
router.get("/UnverifiedTransactions", function (req, res) {
  zarinpal
    .UnverifiedTransactions()
    .then(function (response) {
      if (response.status == 100) {
        console.log(response.authorities);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

/**
 * Route: Refresh Authority [module]
 * @param {number} expire [(1800 / 60) = 30min]
 * @return {String} status [Status of Authority]
 */
router.get("/RefreshAuthority/:expire/:token", function (req, res) {
  zarinpal
    .RefreshAuthority({
      Authority: req.params.token,
      Expire: req.params.expire,
    })
    .then(function (response) {
      if (response.status == 100) {
        res.send(
          "<h2>You can Use: <u>" +
            req.params.token +
            "</u> — Expire in: <u>" +
            req.params.expire +
            "</u></h2>"
        );
      }
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = router;
