const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors =require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err)
        process.exit(1);
    });


const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
    const { name, email } = req.body;

    const user = new User({ name, email });
    try {
        const user = new User({ name, email });
        await user.save();
        res.status(200).send(user);
    } catch (error) {
       console.error('Error saving user:', error);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
});