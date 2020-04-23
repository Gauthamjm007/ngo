const Ngo = require("../models/ngo");

module.exports.list = (req, res) => {
  Ngo.find()
    .then((ngo) => {
      res.json(ngo);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const ngo = new Ngo(body);

  ngo
    .save()
    .then((ngo) => {
      res.json(ngo);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;

  Ngo.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((ngo) => {
      res.json(ngo);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Ngo.findByIdAndDelete(id)
    .then((ngo) => {
      res.json(ngo);
    })
    .catch((err) => {
      res.josn(err);
    });
};
