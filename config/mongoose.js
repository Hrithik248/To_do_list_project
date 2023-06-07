const mongoose= require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/to_do_list_db');
  console.log('db connected');
}