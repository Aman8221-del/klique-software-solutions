const ContactMessage = require("../models/ContactMessage");

const createContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // check required fields
    if (!name || !email || !subject) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // create contact message

    const contactMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been sent successfully",
      data: contactMessage,
    });
  } catch (error) {
    console.log("Contact message error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your message",
    });
  }
};

module.exports = {
  createContactMessage,
};
