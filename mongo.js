



// veri tabanına yazılacak veri
// const note = new Note({
//   content: 'HTML is not Hard',
//   date: new Date(),
//   important: false,
// })


// veritabanından veri almak
// Note.find({ important: true }).then(result => { // sadece important olanları olmak
Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })

// veri tabanına veri yazma
// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })