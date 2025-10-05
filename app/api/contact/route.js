import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstname, lastname, email, service, message } = await request.json();

    // Validate required fields
    if (!firstname || !lastname || !email || !service || !message) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Send email to yourself
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['meherabh016@gmail.com'],
      subject: `New Contact: ${firstname} ${lastname} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; color: white; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px;">New Portfolio Contact!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is interested in your ${service.replace('_', ' ')} services</p>
          </div>

          <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #495057;">Name:</strong>
              <div style="color: #6c757d; margin-top: 5px;">${firstname} ${lastname}</div>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #495057;">Email:</strong>
              <div style="color: #6c757d; margin-top: 5px;">
                <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
              </div>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #495057;">Service Interest:</strong>
              <div style="color: #6c757d; margin-top: 5px; text-transform: capitalize;">${service.replace('_', ' ')}</div>
            </div>

            <div>
              <strong style="color: #495057;">Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 6px; margin-top: 8px; border-left: 4px solid #007bff; color: #212529;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <div style="text-align: center; padding: 20px; background: #e9ecef; border-radius: 8px;">
            <p style="margin: 0; color: #6c757d; font-size: 14px;">
              💼 Reply directly to this email or contact ${email}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('API error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}