import Generic from '../models/Generic';

export const sayHi = async (req, res) => {
    res.status(200).json({ message: 'Hello world' });
};

export const postModel = async (req, res) => {
    const { name, quantity } = req.body;

    const newGeneric = new Generic({ name, quantity });

    res.status(201).json({ message: 'User requested', data: newGeneric });
};
