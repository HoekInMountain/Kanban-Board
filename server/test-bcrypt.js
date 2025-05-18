const bcrypt = require('bcrypt');

const plain = 'password123';
const hash = '$2b$10$HdT8aUp/HoTKYF.lKQgDU.2SyqRUR5vK6D6mA5uVAA2ak12N8pSY2';

bcrypt.compare(plain, hash).then(result => {
  console.log('Match result:', result); // should log: true
}).catch(err => {
  console.error('Error comparing:', err);
});
