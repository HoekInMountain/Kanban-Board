import bcrypt from 'bcrypt';

const plain = 'password123';
const hash = '$2b$10$HdT8aUp/HoTKYF.lKQgDU.2SyqRUR5vK6D6mA5uVAA2ak12N8pSY2';

const result = await bcrypt.compare(plain, hash);
console.log('Match result:', result);
