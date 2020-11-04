module.exports = {
    getPlanes: (req, res) => {
        const db = req.app.get('db');

        db.get_planes()
        .then(planes => {
            res.status(200).send(planes)
        }).catch(err => {
            console.log(err);
            res.status(404).send("Couldn't process request!")
        })
    },

    addPlane: (req, res) => {
        const db = req.app.get('db');
        const {type, count} = req.body;
        db.add_plane([type, count])
        .then(planes => {
            res.status(200).send(planes)
        }).catch(err => {
            console.log(err); //this is for the developer
            res.status(500).send('Could not add plane!') //this is a message to the frontend
        })
    }

}