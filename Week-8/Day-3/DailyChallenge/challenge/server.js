import express from 'express';
import { createServer } from 'http';
import cors from 'cors';

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
}))

app.post('/api/world', (req, res) => {
  console.log(req.body);
  const message = req.body.message;
  console.log(message);
  res.status(200).json({
    message: `I received your POST request. That is what you sent me: ${message}`
  })
})

server.listen(5050, () => {
  console.log(`Server listening on 5050 port`)
})