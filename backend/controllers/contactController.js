const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    // Email integration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: message
    });

    res.json({ success: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};