const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Connecting...')
    setTimeout(() => { 
      console.log('You playin the game now cuz');
    }, 2000)
    conn.write("Name: LHL");
  });

  conn.on('connect', () => {
    conn.write('Move: up')
  })

  conn.on('data', (data) => {
    console.log(data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {connect};