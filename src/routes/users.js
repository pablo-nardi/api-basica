module.exports = app =>{

    const Users = app.db.models.Users;
    const Tasks = app.db.models.Tasks;

    app.route('/usersAndTasks')
        .get((req,res)=>{
            Users.findAll({include: Tasks})
            .then(result => res.json(result))
            .catch(error =>{
                res.status(412).json({msg:error.message});
            });
        });
        
    app.route('/users')
        .get((req,res)=>{
            Users.findAll({})
            .then(result => res.json(result))
            .catch(error =>{
                res.status(412).json({msg: error.message});
            });
        })
        .post((req,res)=>{
            Users.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        });

    app.route('/users/:id') 
        .get((req,res)=>{
            Users.findByPk(req.params.id,{
                attributes: ['id','name','email']
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        .put((req,res)=>{
            Users.update(req.body,{where: req.params})
            .then(result => res.status(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        .delete((req,res)=>{
            Users.destroy({where: req.params})
            .then(result => res.send("objeto eliminado"))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
}