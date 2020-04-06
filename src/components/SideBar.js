import React from 'react';

const SideBar = (props) => {
  const { boarderSize, changeSize } = props;
  return (
    <div className="SideBar">
      <div className="radio">
        <input
          className="Button"
          name="size"
          type="button"
          value="SMALL"
          checked={boarderSize === 'SMALL'}
          onClick={changeSize}
        />
      </div>
      <div className="radio">
        <input
          className="Button"
          name="size"
          type="button"
          value="BIG"
          checked={boarderSize === 'BIG'}
          onClick={changeSize}
        />
      </div>
      <div className="Acknowledgement">
        <div
          style={{
            textAlign: 'center',
            width: '200px',
          }}
        >
          CREATED WITH
          <span style={{ color: 'red', fontSize: '15px' }}> ❤ </span>
          FOR PARNIAN
        </div>
      </div>
    </div>
  );
};

export default SideBar;
