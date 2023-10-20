import nodemailer from 'nodemailer';
import User from '@/models/eventUserModels';
import bcryptjs from 'bcryptjs';


export const sendEmail = async({email, emailType, userId}:any) => {
  try {
      // create a hased token
      const hashedToken = await bcryptjs.hash(userId.toString(), 10)

      if (emailType === "VERIFY") {
          await User.findByIdAndUpdate(userId, 
              {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000})
      } else if (emailType === "RESET"){
          await User.findByIdAndUpdate(userId, 
              {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
      }


      var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
          auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
          }
        });
      
     


        const mailOptions = {
          from: 'ronald.dimatangal@gmail.com',
          to: email,
          subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
          html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
          or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
          </p>`


        }

      const mailresponse = await transporter.sendMail(mailOptions);
      return mailresponse;





    } catch (error: any) {
        throw new Error(error.message);
    }
}

