/* 產生主持人密語的 SHA-256 雜湊，貼到 config.js 的 hostHash
 * 用法：node tools/hash.js 你的密語 */
const pass = process.argv.slice(2).join(' ');
if (!pass) { console.error('用法：node tools/hash.js 你的密語'); process.exit(1); }
console.log(require('crypto').createHash('sha256').update(pass, 'utf8').digest('hex'));
