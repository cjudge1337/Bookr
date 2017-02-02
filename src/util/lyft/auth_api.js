import $ from 'jquery';
import { LYFT_CLIENT_TOKEN, LYFT_CLIENT_SECRET } from '../../../config';

export const getUserProfile = () => (
  $.ajax({
    url: "https://api.lyft.com/v1/profile",
    method: 'GET',
    headers: { 'Authorization': `Bearer ${LYFT_CLIENT_TOKEN}` }
  })
);
