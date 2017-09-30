export default function toHex(number) {
  let _hex = number.toString(16).toUpperCase();
  return _hex.length < 2 ? "0" + _hex : _hex;
}
