// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const User = require('./models/user')
// const Banner = require('./models/banner')

// // const MONGODB_URI =
// //   process.env.MONGODB_URI || 'mongodb://root:root@127.0.0.1:27017/hello?authSource=admin'
// // const PORT = process.env.PORT || 3000

// // mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

// mongoose.connection.on('error', err => {
//   console.error('MongoDB error', err)
// })

// app.use(express.json())

// app.get('/user', async (req, res) => {
//   const user = await User.find({})
//   res.json(user)
// })

// app.get('/user/:id', async (req, res) => {
//   const { id } = req.params

//   try {
//     const user = await User.findById(id)
//     res.json(user)
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.post('/register', async (req, res) => {
//   const payload = req.body
  
// })
// app.post('/login', async (req, res) => {
  
// })

// app.put('/user/:id', async (req, res) => {
//   const payload = req.body
//   const { id } = req.params

//   try {
//     const user = await User.findByIdAndUpdate(id, { $set: payload })
//     res.json({ status: 'success'})
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.delete('/user/:id', async (req, res) => {
//   const { id } = req.params

//   try {
//     await User.findByIdAndDelete(id)
//     res.json({ status: 'success'})
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })
// //**********************************************************************Banner*******//

// app.get('/banner', async (req, res) => {
//   const banner = await Banner.find({})
//   res.json(banner)
// })

// app.get('/banner/:id', async (req, res) => {
//   const { id } = req.params

//   try {
//     const banner = await Banner.findById(id)
//     res.json(banner)
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.post('/banner', async (req, res) => {
//   const payload = req.body
//   try {
//     const banner = new Banner(payload)
//     await banner.save()
//     res.json({ status: 'success'})
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.put('/banner/:id', async (req, res) => {
//   const payload = req.body
//   const { id } = req.params

//   try {
//     const banner = await Banner.findByIdAndUpdate(id, { $set: payload })
//     res.json({ status: 'success'})
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.delete('/banner/:id', async (req, res) => {
//   const { id } = req.params

//   try {
//     await Banner.findByIdAndDelete(id)
//     res.json({ status: 'success'})
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.listen(PORT, () => {
//   console.log(`Application is running on port ${PORT}`)
// })
