// import { Router } from 'express';
// import * as UberApi from '../util/uber/auth_api';
// // import LyftApi from './lyft_api';
//
// const router = Router();
//
// export default () => {
//   router.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', "http://localhost:3000");
//     res.header('Access-Control-Allow-Methods', 'DELETE');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
//   });
//
//   router.post('/auth', (req, res) => {
//     debugger
//     UberApi.login(res.query.code);
//   });
// };
