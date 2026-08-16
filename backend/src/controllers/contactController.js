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

//Admin: get all contact messages

const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 }).lean();

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    console.error("Get contact messages error:", error);

    return res.status(500).json({
      success: false,
      message: "failed to fetch contact messages",
    });
  }
};

//Admin: delete messge

const deleteContactMessage = async (req, res) => {
  try {
    const message = await ContactMessage.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (error) {
    console.error("Delete contact message error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete contact message",
    });
  }
};

module.exports = {
  createContactMessage,
  getContactMessages,
  deleteContactMessage,
};
