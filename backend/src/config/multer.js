import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  dest: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return cb(err);

        return cb(null, hash.toString('hex') + extname(file.originalname));
      });
    },
  }),

  limits: {
    fileSize: 2 * 1024 * 1024
  },

  fileFilter: function (req, file, callback) {
    if (['xls', 'xlsx', 'csv', 'ods'].indexOf(file.originalname.split('.')[file.originalname.split('.').length - 1]) === -1) {
      return callback(new Error('Please upload a excel file'));
    }
    callback(null, true);
  }

}
