import React from 'react';
import styles from './styles.module.scss';

const Elements = () => {
  const elements = [
    { type: 'PurpleRectangle',
      style: {
        width: '72.277px',
        height: '122.695px',
        transform: 'rotate(-50.599deg)',
        background: '#9B51E0',
        left: '2%',
        top: '44%'
      }
    },
    { type: 'GreenEllipse',
      style: {
        width: '68.697px',
        height: '68.697px',
        borderRadius: '100%',
        backgroundColor: '#219653',
        left: '4%',
        top: '84%'
      }
    },
    { type: 'YellowRectangle',
      style: {
        width: '72.277px',
        height: '28.492px',
        transform: 'rotate(45.268deg)',
        backgroundColor: '#F2C94C',
        left: '44%',
        top: '25%'
      }
    },
    { type: 'BlueRectangle',
      style: {
        width: '62.109px',
        height: '59.671px',
        transform: 'rotate(45.268deg)',
        backgroundColor: '#2D9CDB',
        left: '49%',
        top: '80%'
      }
    },
    { type: 'RedRectangle',
      style: {
        width: '46.5px',
        height: '198.068px',
        transform: 'rotate(21.923deg)',
        backgroundColor: '#EB5757',
        left: '78%',
        top: '18%'
      }
    },
    { type: 'BlueTriangle',
      style: {
        width: '0',
        height: '0',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: '100px solid #2F80ED',
        transform: 'rotate(164.252deg)',
        right: '18%',
        top: '61%'
      }
    },
    { type: 'OrangeEllipse',
      style: {
        width: '84px',
        height: '84px',
        backgroundColor: '#F2994A',
        borderRadius: '100%',
        right: '2%',
        top: '44%'
      }
    },
    { type: 'MintRectangle',
      style: {
        width: '75.945px',
        height: '72.964px',
        transform: 'rotate(11.025deg)',
        backgroundColor: '#56CCF2',
        right: '4%',
        top: '84%'
      }
    }
  ];

  return (
    <>
      {elements.map((element) => (
        <div
          key={element.type}
          className={styles.element}
          style={element.style}
        ></div>
      ))}
    </>
  );
};

export default Elements;
