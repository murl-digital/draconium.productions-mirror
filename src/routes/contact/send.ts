import type { EndpointOutput } from '@sveltejs/kit';

export async function post({ request }): Promise<EndpointOutput> {
    const data = await request.json();

    const verify = await fetch('https://hcaptcha.com/siteverify', {
        method: 'POST',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            response: data.captcha.response,
            secret: '--REDACTED--'
        }).toString()
    });
    const verifyResult = await verify.json();
    console.log(verifyResult);

    if (!verifyResult.success)
        return {
            status: 401,
            body: {
                errorCode: verifyResult['error-codes']
            }
        };

    const emailRequest = {
        personalizations: [{ to: [{ email: 'contact@draconium.productions' }] }],
        from: { email: 'no-reply@draconium.productions' },
        reply_to: { email: data.email },
        subject: data.subject,
        content: [{ type: 'text/plain', value: data.content }]
    };

    await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'post',
        body: JSON.stringify(emailRequest),
        headers: {
            Authorization:
                'Bearer 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',
            'Content-Type': 'application/json'
        }
    });

    return {
        status: 200
    };
}
