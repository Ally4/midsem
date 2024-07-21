import app from '../languages/config';

const welcome = app.get('/', (req, res) => {
  res.status(200).json({
    status: res.__(200),
    message: res.__('Welcome to the Army shop platform!.'),
  });
});

export default welcome;
