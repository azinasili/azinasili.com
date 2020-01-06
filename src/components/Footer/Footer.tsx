import React from 'react';

const Footer: React.FC<{}> = (): React.ReactElement => (
  <>
    <footer className="footer">
      <p>
        &copy;
        {new Date().getFullYear()} Azin Asili. All Rights Reserved.
      </p>
    </footer>
    <style jsx>
      {`
        .footer {
          font-size: 0.75em;
          text-align: center;
        }
      `}
    </style>
  </>
);

export default React.memo(Footer);
