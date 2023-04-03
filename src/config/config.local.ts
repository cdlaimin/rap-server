import { IConfigOptions } from '../types'

const config: IConfigOptions = {
  version: '2.9.0',
  serve: {
    port: (process.env.SERVE_PORT && parseInt(process.env.SERVE_PORT, 10)) || 8080,
    path: '',
  },
  keys: ['some secret hurr'],
  session: {
    key: 'rap2:sess',
  },
  db: {
    dialect: 'mysql',
    host: process.env.MYSQL_URL || 'localhost',
    port: (process.env.MYSQL_PORT && parseInt(process.env.MYSQL_PORT, 10)) || 3306,
    username: process.env.MYSQL_USERNAME || 'root',
    password: process.env.MYSQL_PASSWD || '',
    database: process.env.MYSQL_SCHEMA || 'RAP2_DELOS_APP_LOCAL',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
  redis: {},
  queueRedis: {
    host: process.env.QUEUE_REDIS_URL || 'localhost',
    port: (process.env.QUEUE_REDIS_PORT && parseInt(process.env.REDIS_PORT, 10)) || 6379,
    password: process.env.QUEUE_REDIS_PWD || undefined,
    maxRetriesPerRequest: null,
  },
  mail: {
    host: process.env.MAIL_HOST ?? 'smtp-mail.outlook.com',
    port: process.env.MAIL_PORT ?? 587,
    secure: process.env.MAIL_SECURE ?? false,
    auth: {
      user: process.env.MAIL_USER ?? '',
      pass: process.env.MAIL_PASS ?? '',
    },
  },
  mailSender: process.env.MAIL_SENDER ?? '',
}

export default config
