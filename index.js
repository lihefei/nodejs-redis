const redis = require('redis');
const client = redis.createClient('6379', '192.168.43.134');
// client.auth(123456); 如果没有设置密码不需要这一步

// redis连接
client.on('connect', (error, result) => {
    if (error) {
        throw error;
    }
    console.log('连接成功', result);

    // 字符串数据类型(包括整数、小数)增删改查
    // 新增
    // client.set('name', 'zhangsan', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 编辑
    // client.set('name', 'lisi', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询
    // client.get('name', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 删除
    // client.del('name', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 散列(哈希)数据类型增删改查
    // 添加键值对
    // client.hset('person', 'age', 18, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 添加多组键值对
    // client.hmset('person', 'name', 'zhangsan', 'age', 18, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 键不存在才添加
    // client.hsetnx('person', 'sex', 1, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 删除键值对
    // client.hdel('person', 'name', 'age', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查看单个键的值
    // client.hget('person', 'name', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查看多个键的值
    // client.hmget('person', 'name', 'age', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询所有键值对
    // client.hgetall('person', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询所有键
    // client.hkeys('person', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询所有值
    // client.hvals('person', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询键值对数量
    // client.hlen('person', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询键是否存在
    // client.hexists('person', 'age', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 列表数据类型增删改查
    // 新增从右边
    // client.rpush('names', 'zhangsan', 'lisi', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 新增从左边
    // client.lpush('names', 'wangwu', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 修改从左边
    // client.lset('names', 0, 'zhangsan', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 修改从右边
    // client.rset('names', 0, 'lisi', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 删除单个从右边
    // client.rpop('names', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });
    // 删除单个从左边
    // client.lpop('names', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });
    //删除范围从左边
    // client.ltrim('names', 0, 1,  (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });
    //删除范围从右边
    // client.ltrim('names', 0, 1,  (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询索引从左边开始
    // client.lindex('names', 0, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询范围从左边开始(-1表示最后)
    // client.lrange('names', 0, -1, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 无序集合数据类型增删改查
    // 新增
    // client.sadd('ids', 1, 2, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 删除
    // client.srem('ids', 2, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 删除
    // client.spop('ids', 2, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 编辑把元素从ids集合移动到uuids集合
    // client.smove('ids', 'uuids', 2, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询
    // client.smembers('ids', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询集合数量
    // client.scard('ids', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询元素是否在集合内
    // client.sismember('ids', 1, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询两个集合的交集
    // client.sinter('ids','uuids',  (err, res) =>  {
    //     console.log(res)
    // });
    // 查询两个集合的并集
    // client.sunion('ids','uuids',  (err, res) =>  {
    //     console.log(res)
    // });
    // 查询两个集合的补集
    // client.sdiff('ids','uuids',  (err, res) =>  {
    //     console.log(res)
    // });

    // 有序集合数据类型增删改查
    // 新增
    // client.zadd('dbs', 1, 'redis', 2, 'mongodb', 3, 'mysql', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 删除集合一个或多个key
    // client.zrem('dbs', 'other', 'mysql', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询集合中key数量
    // client.zcard('dbs', (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 查询集合中指定索引范围的key
    // client.zrange('dbs', 0, -1, (err, res) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(res);
    // });

    // 事务(批量执行命令，统一返回结果)
    // client
    //     .multi()
    //     .set('color', 'red')
    //     .get('color')
    //     .exec((err, replies) => {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(replies);
    //     });

    // 查询所有key
    // client.keys('*', (err,res) => {
    //     console.log(res);
    // });
});

// 发布订阅
// 创建订阅者服务
const sub = redis.createClient('6379', '192.168.43.134');

// 订阅者连接redis成功
sub.on('ready', () => {
    sub.subscribe('channel'); //订阅channel频道
    console.log('订阅者连接成功');
});

//订阅者监听订阅回调
sub.on('subscribe', (channel, count) => {
    console.log(`订阅${channel}频道成功`, `频道数${count}`);
});

//订阅者监听消息回调
sub.on('message', (channel, message) => {
    console.log(`订阅者接收到${channel}频道的消息：${message}`);

    // 取消订阅
    // client.on('unsubscribe', (channel, count) => {
    //     console.log('取消${channel}频道订阅', `频道数${count}`);
    // });
});

// 创建发布者服务
const pub = redis.createClient('6379', '192.168.43.134');

// 发布者连接redis成功
pub.on('ready', () => {
    // 发布消息
    pub.publish('channel', 'hello', (err, res) => {
        if (err) {
            throw err;
        }
        console.log(`发布者向channel频道发布内容：hello`);
    });

    console.log('发布者连接成功');
});

// redis错误
client.on('err', (err) => {
    console.log(err);
});
