const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find admin
    const admin = await Admin.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Create JWT
    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error during login",
    });
  }
};

// CREATE ADMIN
const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    // Normalize input
    const normalizedName = name.trim();
    const normalizedEmail = email.toLowerCase().trim();

    // Validate name
    if (normalizedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 2 characters",
      });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      email: normalizedEmail,
    });

    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: "Admin with this email already exists",
      });
    }

    // Validate password
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create admin
    const admin = await Admin.create({
      name: normalizedName,
      email: normalizedEmail,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Admin created successfully",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        createdAt: admin.createdAt,
      },
    });
  } catch (error) {
    console.error("Create admin error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while creating admin",
    });
  }
};

// GET ALL ADMINS
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({})
      .select("-password")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      admins,
    });
  } catch (error) {
    console.error("Get admins error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while fetching admins",
    });
  }
};

// UPDATE ADMIN
const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    // Find admin
    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Update name
    if (name !== undefined) {
      const normalizedName = name.trim();

      if (!normalizedName) {
        return res.status(400).json({
          success: false,
          message: "Name cannot be empty",
        });
      }

      if (normalizedName.length < 2) {
        return res.status(400).json({
          success: false,
          message: "Name must be at least 2 characters",
        });
      }

      admin.name = normalizedName;
    }

    // Update email
    if (email !== undefined) {
      const normalizedEmail = email.toLowerCase().trim();

      if (!normalizedEmail) {
        return res.status(400).json({
          success: false,
          message: "Email cannot be empty",
        });
      }

      // Check if another admin already uses this email
      const existingAdmin = await Admin.findOne({
        email: normalizedEmail,
        _id: { $ne: id },
      });

      if (existingAdmin) {
        return res.status(409).json({
          success: false,
          message: "Another admin with this email already exists",
        });
      }

      admin.email = normalizedEmail;
    }

    // Update password only if provided
    if (password !== undefined && password !== "") {
      if (password.length < 8) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 8 characters",
        });
      }

      admin.password = await bcrypt.hash(password, 12);
    }

    await admin.save();

    return res.status(200).json({
      success: true,
      message: "Admin updated successfully",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        createdAt: admin.createdAt,
        updatedAt: admin.updatedAt,
      },
    });
  } catch (error) {
    console.error("Update admin error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while updating admin",
    });
  }
};

// DELETE ADMIN
const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent deleting currently logged-in admin
    if (req.admin && req.admin.id.toString() === id.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot delete your own admin account",
      });
    }

    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    await Admin.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Admin deleted successfully",
    });
  } catch (error) {
    console.error("Delete admin error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while deleting admin",
    });
  }
};

module.exports = {
  loginAdmin,
  createAdmin,
  getAdmins,
  updateAdmin,
  deleteAdmin,
};
