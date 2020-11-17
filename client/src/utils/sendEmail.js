import emailjs from 'emailjs-com';

const sendEmail = async () => {
  try {
    await emailjs.send(
      'service_1yybzln',
      'template_a8l6sr4',
      {
        to_name: 'manu'
      },
      'user_unZVLPqrU43eqBVNf5Hp4'
    );
  } catch (err) {
    console.log(err);
  }
};

export default sendEmail;
