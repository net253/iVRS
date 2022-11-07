export default function (func, timer = 100) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(func), timer);
    } catch (error) {
      reject(error);
    }
  });
}
