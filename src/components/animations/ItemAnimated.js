import posed from 'react-pose';

const ItemAnimated = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
});

export default ItemAnimated;
