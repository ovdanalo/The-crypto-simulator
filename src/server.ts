import app from './app';
import 'dotenv/config';

app.listen(process.env.PORT, () => {
    console.log(`[server] Server is running on port ${process.env.PORT}`)
})
