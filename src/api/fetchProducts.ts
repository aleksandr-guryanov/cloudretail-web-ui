import json from './json';

export default () => json(fetch('/products'));