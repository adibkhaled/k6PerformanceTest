import http from 'k6/http';
import { sleep, check } from 'k6';


export let options = {
    stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 30 },
    { duration: '30s', target: 0 },
  ],
  thresholds
  : {
    http_req_duration: ['p(95)<540', 'p(99)<1500'],
  },
}

export default function () {
  const BASE_URL = 'https://vimec.nl/'

  http.get(`${BASE_URL}/careers`)
  http.get(`${BASE_URL}/company`)
  http.get(`${BASE_URL}/ampoules`)
  sleep(0.3)
}