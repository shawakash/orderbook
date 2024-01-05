// Footer.tsx
import React, { FunctionComponent } from 'react';
import Button from './button';
import { FooterProps } from '@/types/interfaces';


const Footer: FunctionComponent<FooterProps> = ({ toggleFeedCallback, killFeedCallback, isFeedKilled }) => {
  return (
    <div className="flex justify-center bg-gray-900">
      {!isFeedKilled && (
        <Button title="Toggle Feed" backgroundColor="indigo-700" callback={toggleFeedCallback} />
      )}
      <Button
        title={isFeedKilled ? 'Renew feed' : 'Kill Feed'}
        backgroundColor="red-700"
        callback={killFeedCallback}
      />
    </div>
  );
};

export default Footer;
