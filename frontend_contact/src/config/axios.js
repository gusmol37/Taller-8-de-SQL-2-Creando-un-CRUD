/**
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-30
 */

import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:9090/'
});

export default clienteAxios;