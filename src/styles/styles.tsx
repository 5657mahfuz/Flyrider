import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../const/colors';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWeight = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    color: colors.black,
  },
  inputcontainer: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
  },
  fullWidthCard: {
    width: '100%',
    backgroundColor: '#FFF1E5',
    borderRadius: 0,
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 20,
    minHeight: 300,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    marginTop: '-2%',
  },
  defaultText: {
    color: colors.black,
  },
  fullWidthCardTransparent: {
    width: '100%',

    borderRadius: 0,

    overflow: 'hidden',
    paddingHorizontal: 10,

    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  WhiteCard: {
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 10,
    minHeight: 300,
  },
  roundShape: {
    position: 'absolute',
    top: -10,
    left: -5,
    // Add any other styles for the roundShape image
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    objectFit: 'contain',
    width: 200,
  },
  segmentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
  },
  segmentButton: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 100,
  },
  selectedSegmentButton: {
    backgroundColor: '#FFA07A',
  },
  segmentButtonText: {
    color: '#333',
    fontSize: 16,
  },
  selectedSegmentButtonText: {
    color: '#fff',
  },
  roundButton: {
    backgroundColor: 'blue',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  TransParentRoundButton: {
    backgroundColor: colors.default_color,
    borderRadius: 25,
    width: 25,
    height: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  textButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    position: 'absolute',
    bottom: 0,
  },
  textButton: {
    marginTop: 20,
    flex: 1,
    // backgroundColor: 'white',
    // paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 15,
    width: 40,
  },
  selectedTextButton: {
    // backgroundColor: '#FFA07A',
  },
  textButtonText: {
    color: '#333',
    fontSize: 16,
  },
  selectedTextButtonText: {
    borderBottomColor: '#F87146',
    borderBottomWidth: 2,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  textButtonInline: {
    width: '48%',
  },
  checkboxContainer: {
    marginTop: 5,
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    // margin: 8,
  },
  button: {
    backgroundColor: '#F87146',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    padding: 5,
  },
  DefaultButton: {
    backgroundColor: '#F87146',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    padding: 10,
    width: '90%',
    alignItems: 'center',
    left: '5%',
  },
  centerText: {
    textAlign: 'center',
    // Add other styles as needed
  },
  defaultColor: {
    color: '#F87146',
  },

  countryCodeInput: {
    marginLeft: 5,
    flex: 1,
  },
  mobileNumberContainer: {
    flex: 1,
  },
  mobileNumberInput: {
    flex: 1,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCodeLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCodeLabel: {
    marginLeft: 8,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    top: '35%',
    zIndex: 1,
    // padding:3,
    backgroundColor: '#F0F5FA',
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  t700: {
    fontSize: 24,
    fontWeight: '700',
  },
  t400: {
    fontSize: 16,
    fontWeight: '400',
    color: '#78828A',
    lineHeight: 22,
  },
  bottomCard: {
    position: 'relative',
    zIndex: 1,
    bottom: 0,
    backgroundColor: '#FFF1E5',
    height: 495,
    marginTop: 10,
    flex: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    maxHeight: deviceHeight,
    minHeight: deviceHeight,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  otpInput: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#F87146',
    borderRadius: 8,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#434E58',
    fontWeight: '700',
  },
  t600: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171725',
    lineHeight: 16,
  },
  t500: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 50,
  },
  modalContent: {
    width: '100%',
    // aspectRatio: 1, // To make it square-shaped
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 16,
  },
  inputImage: {
    // color: '#171725',
  },
  row: {
    flexDirection: 'row',
  },
  ovalShape: {
    minWidth: 80,
    minHeight: 110,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#DADADA',
  },
  internalOval: {
    width: 60,
    height: 85,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#EFF1F5',

    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
  floatingRight: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
  },
  justifyContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commoncontainer: {
    position: 'relative',
    zIndex: 99,
    marginTop: '5%',
  },
  relativeContainer: {
    // padding: 2,
    position: 'relative',
    zIndex: 99,
  },
  boxCard: {
    minHeight: 160,
    borderRadius: 12,
  },
  halfboxCard: {
    minHeight: 160,
    borderRadius: 12,
    width: (deviceWeight - 40) / 2,
    padding: 10,
    margin: '1%',
  },
  left: {
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  shadow: {
    shadowColor: '##FF7622',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  f10: {
    fontSize: 10,
    color: colors.black,
  },
  f12: {
    fontSize: 12,
    color: colors.black,
  },
  f14: {
    fontSize: 14,
  },
  f16: {
    fontSize: 16,
    color: colors.black,
  },
  f18: {
    fontSize: 18,
    color: colors.black,
  },
  f20: {
    fontSize: 20,
    color: colors.black,
  },
  f22: {
    fontSize: 22,
    color: colors.black,
  },
  f24: {
    fontSize: 24,
    color: colors.black,
  },
  f26: {
    fontSize: 26,
    color: colors.black,
  },
  f28: {
    fontSize: 28,
    color: colors.black,
  },
  f30: {
    fontSize: 30,
    color: colors.black,
  },
  responsive_icon: {
    resizeMode: 'cover',
    objectFit: 'cover',
  },
  floatingTop: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
  topCard: {
    width: '100%',
    overflow: 'hidden',
    paddingHorizontal: 0,
    paddingVertical: 10,
    marginTop: 20,
    minHeight: 100,
  },
  topBackIcon: {
    position: 'absolute',
    left: 0,
    top: '25%',
    zIndex: 1,
    // padding:3,
    backgroundColor: '#F0F5FA',
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#E3E3E3',
    // marginVertical: 20,
  },
  iconButton: {
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  Color_Black: {
    color: '#171725',
  },
  centerSpreadView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  ratingContainer: {
    backgroundColor: colors.default_color,
    borderRadius: 10,
    height: 25,
    minWidth: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dottedUnderline: {
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    paddingBottom: 2,
  },
  container25r: {
    borderRadius: 10,
    minHeight: 25,
    minWidth: '15%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerCard: {
    width: '100%',
    overflow: 'hidden',
    minHeight: 300,
  },
  topBarIcon: {
    borderColor: colors.shadowDark,
    borderWidth: 0.5,
    padding: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  borderHorizontal3: {
    marginHorizontal: '3%',
    color: colors.black,
  },
  dropdown: {
    height: 50,
    borderColor: colors.shadowDark,
    borderWidth: 0.5,
    borderRadius: 8,
    // paddingHorizontal: 8,
    marginBottom: '2%',
    width: '100%',
  },
  placeholderStyle: {
    fontSize: 16,
    color: colors.black,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: colors.black,
    marginLeft: '5%',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: colors.black,
  },
  addtoCardGroupButton: {
    // padding: 7,
    // margin: 5,
    borderRadius: 10,
    color: colors.black,
    shadowColor: '#F54749',
    // shadowOffset: {
    //   width: 1,
    //   height: 0,
    // },
    shadowOpacity: 0.4,
    shadowRadius: 1.5,

    elevation: 3,
  },
  leftSignButton: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.black,
    marginLeft: 10,
    marginRight: -10,
    padding: 5,
  },
  rightSignButton: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
    marginLeft: -10,
    marginRight: 10,
    padding: 5,
  },
  QtyNumber: {
    fontSize: 16,
    padding: 4,
    borderRadius: 5,
    letterSpacing: 5,
    backgroundColor: colors.default_color,
  },
  pHorizontal: {
    paddingHorizontal: 10,
  },
  pVertical: {
    paddingVertical: 10,
  },
  mBottom: {
    marginBottom: 15,
  },
  // dropdown: {
  //   height: 50,
  //   borderColor: 'white',
  //   borderWidth: 0.5,
  //   borderRadius: 8,
  //   paddingHorizontal: 8,
  // },
  // placeholderStyle: {
  //   fontSize: 16,
  //   color: colors.black,
  // },
  // selectedTextStyle: {
  //   fontSize: 16,
  //   color: colors.black,
  // },
  // iconStyle: {
  //   width: 20,
  //   height: 20,
  //   color: colors.black,
  // },
  // inputSearchStyle: {
  //   height: 40,
  //   fontSize: 16,
  //   color: colors.black,
  // },
});
export default styles;
