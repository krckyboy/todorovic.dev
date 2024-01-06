import React from 'react';
import styles from './styles.module.scss';

const Elements = () => {
  const elements = [
    {
      type: 'GreenEllipse',
      style: {
        width: '68.697px',
        height: '68.697px',
        borderRadius: '100%',
        backgroundColor: '#219653',
        left: '4%',
        top: '84%'
      }
    },
    {
      type: 'YellowRectangle',
      style: {
        width: '72.277px',
        height: '28.492px',
        transform: 'rotate(45.268deg)',
        backgroundColor: '#F2C94C',
        left: '37%',
        top: '13%'
      }
    },
    {
      type: 'RedRectangle',
      style: {
        width: '46.5px',
        height: '198.068px',
        transform: 'rotate(21.923deg)',
        backgroundColor: '#EB5757',
        left: '78%',
        top: '13%'
      }
    },
    {
      type: 'MintRectangle',
      style: {
        width: '75.945px',
        height: '72.964px',
        transform: 'rotate(11.025deg)',
        backgroundColor: '#56CCF2',
        right: '4%',
        top: '88%'
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
