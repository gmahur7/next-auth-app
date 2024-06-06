import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcrypt from 'bcryptjs';

interface IEmail {
    email: string;
    emailType: string;
    userId: string;
}

export const sendEmail = async ({ email, emailType, userId }: IEmail) => {
    try {
        // Log the email parameter to ensure it's correct
        console.log(`Email to be sent to: ${email}`);

        // Check if email is valid
        if (!email) {
            throw new Error("Email is required");
        }

        const hashToken = await bcrypt.hash(userId.toString(), 10);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use false here for port 587
            requireTLS: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        let subject = "";
        let htmlContent = "";

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, { $set: { verifyToken: hashToken, verifyTokenExpiry: Date.now() + 3600000 } });
            subject = "Please Verify your Email";
            htmlContent = `<p>Hello,</p><p>Please verify your email by clicking on the link below:</p><a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">${process.env.DOMAIN}/verifyemail?token=${hashToken}</a><p>, or copy and paste the link below in your browser.<br/>Thank you</p>`;
        }

        if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashToken, forgotPasswordTokenExpiry: Date.now() + 3600000 });
            subject = "Reset Your Password";
            htmlContent = `<p>Hello,</p><p>Please reset your password by clicking on the link below:</p><a href="${process.env.DOMAIN}/resetpassword?token=${hashToken}">${process.env.DOMAIN}/resetpassword?token=${hashToken}</a><p>, or copy and paste the link below in your browser.<br/>Thank you</p>`;
        }

        // Log the mail options
        console.log(`Mail Options: From: ${process.env.SMTP_USER}, To: ${email}, Subject: ${subject}`);

        const mailResponse = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: subject,
            html: htmlContent,
        });

        console.log(mailResponse);
        return mailResponse;

    } catch (error: any) {
        console.log(error.message);
    }
}
