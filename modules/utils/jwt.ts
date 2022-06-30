import jwt from 'jsonwebtoken';
if (!process.env.JWT_SECRET) {
  console.warn('No JWT_SECRET environment variable set');
}
export const createToken = (
  payload: string | object,
  options: jwt.SignOptions
) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      options,
      (err, encoded) => {
        if (err) return reject(err);
        return resolve(encoded as string);
      }
    );
  });
};
