const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail, Outlook, etc.
    auth: {
        api_key: process.access_key

    },
});

const sendEmailColtroller = async (req, res) => {
    try {
        const { name, email, msg } = req.body;

        // Validation
        if (!name || !email || !msg) {
            return res.status(400).send({
                success: false,
                message: "Please provide all fields",
            });
        }

        // Send email
        await transporter.sendMail({
            from: "abhiwaghmare3210@gmail.com",
            to: "abhiwaghmare3210@gmail.com",
            subject: "Regarding MERN Portfolio App",
            html: `
                <h5>Detail Information</h5>
                <ul>
                    <li><p>Name: ${name}</p></li>
                    <li><p>Email: ${email}</p></li>
                    <li><p>Message: ${msg}</p></li>
                </ul>
            `,
        });

        return res.status(200).send({
            success: true,
            message: "Your message was sent successfully!",
        });

    } catch (err) {
        console.error(err);
        return res.status(500).send({
            success: false,
            message: "Send Email API error",
            error: err,
        });
    }
};

module.exports = { sendEmailColtroller };
