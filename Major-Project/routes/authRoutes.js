const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Patient = require("../models/Patient");


const router = express.Router();


// ==========================================
// REGISTER PAGE
// ==========================================

router.get("/register", (req, res) => {
    res.render("auth/register", {
        error: null,
        success: null
    });
});


// ==========================================
// REGISTER PATIENT
// ==========================================

router.post("/register", async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            confirmPassword
        } = req.body;


        // Basic validation

        if (!name || !email || !password || !confirmPassword) {
            return res.render("auth/register", {
                error: "Please fill all required fields.",
                success: null
            });
        }


        if (password !== confirmPassword) {
            return res.render("auth/register", {
                error: "Passwords do not match.",
                success: null
            });
        }


        if (password.length < 6) {
            return res.render("auth/register", {
                error: "Password must be at least 6 characters.",
                success: null
            });
        }


        // Check existing user

        const existingUser = await User.findOne({
            email: email.toLowerCase().trim()
        });


        if (existingUser) {
            return res.render("auth/register", {
                error: "An account with this email already exists.",
                success: null
            });
        }


        // Hash password

        const hashedPassword = await bcrypt.hash(password, 10);


        // Create User

        const user = await User.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword,
            role: "patient"
        });


        // Create Patient profile

        await Patient.create({
            user: user._id
        });


        // Redirect to login

        res.redirect("/auth/login?registered=true");

    } catch (error) {

        console.error("Registration error:", error);

        res.render("auth/register", {
            error: "Something went wrong. Please try again.",
            success: null
        });
    }
});


// ==========================================
// LOGIN PAGE
// ==========================================

router.get("/login", (req, res) => {

    const registered = req.query.registered === "true";

    res.render("auth/login", {
        error: null,
        success: registered
            ? "Registration successful. Please login."
            : null
    });
});


// ==========================================
// LOGIN
// ==========================================

router.post("/login", async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        if (!email || !password) {
            return res.render("auth/login", {
                error: "Please enter email and password.",
                success: null
            });
        }


        // Find user

        const user = await User.findOne({
            email: email.toLowerCase().trim()
        });


        if (!user) {
            return res.render("auth/login", {
                error: "Invalid email or password.",
                success: null
            });
        }


        // Compare password

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );


        if (!passwordMatch) {
            return res.render("auth/login", {
                error: "Invalid email or password.",
                success: null
            });
        }


        // Store session

        req.session.user = {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };


        // Role-based redirect

        if (user.role === "admin") {
            return res.redirect("/admin/dashboard");
        }


        if (user.role === "doctor") {
            return res.redirect("/doctor/dashboard");
        }


        return res.redirect("/patient/dashboard");

    } catch (error) {

        console.error("Login error:", error);

        res.render("auth/login", {
            error: "Something went wrong. Please try again.",
            success: null
        });
    }
});


// ==========================================
// LOGOUT
// ==========================================

router.get("/logout", (req, res) => {

    req.session.destroy((error) => {

        if (error) {
            console.error("Logout error:", error);
            return res.redirect("/");
        }

        res.redirect("/auth/login");
    });
});


module.exports = router;