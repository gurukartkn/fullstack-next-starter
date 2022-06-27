import Redis from 'ioredis';

let redisClient: Redis | null = null;

if (!process.env.REDIS_HOST || !process.env.REDIS_PORT) {
  console.warn('REDIS_HOST and REDIS_PORT environment variables are not set.');
}

export const getRedisClient = (): Redis => {
  if (!redisClient) {
    redisClient =
      process.env.REDIS_HOST && process.env.REDIS_PORT
        ? new Redis({
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
          })
        : new Redis({
            port: 5002,
            host: 'localhost',
          });
  }
  return redisClient;
};
