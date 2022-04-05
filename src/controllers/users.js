import {connect} from '../database'

export const getUsers = async (req, res)=>{
   const connections = await connect();  
   const [rows] = await connections.query('SELECT * from users');
   console.log(rows)
    res.json(rows)
}
export const getUser = async (req, res)=>{
    const connections = await connect();  
    const [rows] = await connections.query('SELECT * from users where user_id = ?', [req.params.id]);
    console.log(rows)
     res.json(rows)
    
}
export const getUserCount = async (req, res)=>{
    const connections = await connect();  
    const [rows] = await connections.query('SELECT count(*) from users');
     res.json(rows[0]["count(*)"])
    
}
export const saveUser = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query("INSERT INTO users(name, lastname, address, email) VALUES(?,?,?,?)", [req.body.name, req.body.lastname, req.body.address, req.body.email])

       console.log(result);
}
export const deleteUser = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query('DELETE from users where user_id = ?', [req.params.id]);
    res.sendStatus(204);
}
export const updateUser = async (req, res)=>{
    const connections = await connect();  
    const result = await connections.query('UPDATE users SET ? where user_id = ?', [
        req.body,
        req.params.id
    ]);
    console.log(result);
    res.sendStatus(204);
     
    
}