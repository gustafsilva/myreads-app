import posed from 'react-pose';

const ListAnimated = posed.ol({
  open: {
    y: '0%',
    delayChildren: 50,
    staggerChildren: 80,
    initialPose: 'closed',
  },
});

export default ListAnimated;
