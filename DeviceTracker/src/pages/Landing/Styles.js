const styles = {
    wrapper: {
      container: { 
        flex: 1,
      },
      logoContainer: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 200,
      },
      text: {
        marginTop: 44
      }
    },
    img: {
      bg: {
        flex: 1,
        position: 'absolute',
        zIndex: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      },
      photon: {
        marginTop: 220,
        width: 212,
        height: 56,
      }
    },
    button: {
      container: {
        flex: 1,
        alignItems: 'center',
      },
    },
    text: {
      component: {
        color: 'white',
        fontSize: 16
      }
    }
}

export default styles;
