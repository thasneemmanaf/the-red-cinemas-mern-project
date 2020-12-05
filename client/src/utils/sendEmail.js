import emailjs from 'emailjs-com';

const sendEmail = async (setShowModal) => {
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
    setShowModal({
      status: true,
      type: 'close',
      subject: 'error',
      message: 'something_wrong'
    });
  }
};

export default sendEmail;
