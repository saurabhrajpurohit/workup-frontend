import PoppinsExtraLight from './fonts/Poppins-ExtraLight.ttf';

const Poppins = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    src: `
    local('Poppins'),
    local('Poppins-ExtraLight'),
    url(${PoppinsExtraLight}) format('ttf')
  `
};

export default Poppins;