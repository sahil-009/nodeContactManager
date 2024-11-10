const getContacts = (req, res) => {
    res.status(200).json({ message: "Retrieved all contacts" });
};

const getContact = (req, res) => {
    res.status(200).json({ message: `Retrieved contact with ID ${req.params.id}` });
};

const postContact = (req, res) => {
    res.status(201).json({ message: "Contact created" });
};

const updateContact = (req, res) => {
    res.status(200).json({ message: `Updated contact with ID ${req.params.id}` });
};

const deleteContact = (req, res) => {
    res.status(204).json({ message: `Deleted contact with ID ${req.params.id}` });
};

module.exports = {
    getContacts,
    postContact,
    getContact,
    updateContact,
    deleteContact,
};
