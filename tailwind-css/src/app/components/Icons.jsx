import React from 'react';

const Icons = ({pathIcon, clasN})=>{
    return(
        <a href="">
              <svg
              className={clasN}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d={pathIcon} />
              </svg>
            </a>
    );
};

export default Icons;