<script>
    import { createEventDispatcher } from "svelte";
    // import nodemailer from "nodemailer";

    const dispatch = createEventDispatcher();

    // const transporter = nodemailer.createTransport({
    //     host: "smtp.example.com",
    //     port: 587,
    //     secure: false,
    //     auth: {
    //         user: "your-email@example.com",
    //         pass: "your-password"
    //     }
    // });

    let mailSubject = "";
    let mailMessage = "";

    async function handleSubmit() {
        // const mailOptions = {
        //     from: "your-email@example.com",
        //     to: "recipient@example.com",
        //     subject: mailSubject,
        //     text: mailMessage
        // };
        // await transporter.sendMail(mailOptions);

        // notify global page to display thanking message
        dispatch("message");
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <textarea id="subject" placeholder="Subject" bind:value={mailSubject} />
    <textarea id="message" placeholder="Message" bind:value={mailMessage} />
    <button class="button-primary" type="submit">send</button>
</form>

<style>
    form {
        position: absolute;
        top: 0;
        left: 50%;
        translate: -50%;
        width: 40em;
        max-width: 90%;
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        gap: 2rem;
    }

    textarea {
        width: 100%;
        padding: 1em;
        outline: none;
        resize: none;
        border: none;
        border-radius: 0.25em;
        box-sizing: border-box;
        opacity: 0;
    }

    textarea,
    button {
        font-size: 1.5rem;
    }

    #subject {
        animation: appear 2s ease-in-out forwards;
    }

    #message {
        height: 16em;
        animation: appear 2s ease-in-out forwards;
        animation-delay: 1s;
    }

    button {
        opacity: 0;
        animation: appear 2s ease-in-out forwards;
        animation-delay: 2s;
    }

    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
