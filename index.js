const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/message', (req, res) => {
  const { phone, message } = req.body;

  if (phone !== '01999092215') {
    return res.status(403).json({ reply: 'Access denied: Unauthorized phone number.' });
  }

  let reply = 'Unknown command.';
  if (message.toLowerCase() === 'balance') reply = 'Your balance is $5.00';
  else if (message.toLowerCase() === 'status') reply = 'Your account is active.';

  res.json({ reply });
});

app.get('/', (req, res) => res.send('SIM SMS Backend Running'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
