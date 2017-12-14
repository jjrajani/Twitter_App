// const apiRoutes = [
//   '/auth/twitter',
//   '/twitter/callback',
//   '/api/current_user',
//   '/api/logout',
//   '/api/twitter-search'
// ];
//
// module.exports = {
//   get: jest.fn(url => {
//     if (apiRoutes.indexOf(url) !== -1) {
//       return Promise.resolve({
//         data: 'data'
//       });
//     }
//   }),
//   post: jest.fn(url => {
//     if (apiRoutes.indexOf(url) !== -1) {
//       return Promise.resolve({
//         data: 'data'
//       });
//     }
//     if (apiRoutes.indexOf(url) !== -1) {
//       return Promise.resolve({
//         data: 'data2'
//       });
//     }
//   }),
//   create: jest.fn(function() {
//     return this;
//   })
// };
