interface email {
    name: string,
    email: string,
    message: string,
}
export const sendEmail = async (prop: email) => {
    const { name, email, message } = prop;
    var verification:boolean = true;
    try {
        const response = await fetch('https://us-central1-eportfolio-7d613.cloudfunctions.net/sendEmail' , {
            mode: 'cors',
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                to: "egmarinn@cougarnet.uh.edu",
                subject: `Eportfolio Contact Me Page - ${name} \<${email}\>`,
                text: `${message}`,
            }),
        });
        if (response.ok) {
            console.log('Email sent successfully!');
        } else {
            console.error('Error sending email:', response.statusText);
            verification = false;
        }
    } catch (error) {
        console.error('Error sending email: ', error);
        verification = false;
    }
    
    return verification;
}