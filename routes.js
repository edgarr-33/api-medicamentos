const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM medicamentos', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO medicamentos set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('receta added!')
        })
    })
})

//get by id


routes.get('/:id_receta', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM medicamentos WHERE id_receta = ?',(req.body,req.params.id_receta), (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})





module.exports = routes