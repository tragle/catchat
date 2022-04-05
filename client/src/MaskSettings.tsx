import * as React from 'react';
import { useState } from 'react';
import { Mask } from './types';

interface MaskSettingsProps {
  addMaskHandler: (masks: Mask[]) => void;
  masks: Mask[];
}

const MaskSettings = ({ addMaskHandler, masks }: MaskSettingsProps) => {
  const [newMask, setNewMask] = useState('');
  return (
    <div className='mask-settings'>
      { masks.map(
        (m, i) => 
        <span className="mask">
          <span className='mask-value'>{m}</span>
          <span 
            className='mask-delete'
            onClick={() => {
              const masksCopy = masks.slice();
              masksCopy.splice(i, 1); // delete this element
              addMaskHandler(masksCopy);
            }}>
              X
            </span>
          </span>
      )}
      <form 
        className="mask-settings-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (newMask.length) addMaskHandler([newMask, ...masks])
        }}
      >
        <input 
          className="mask-input" 
          placeholder="Enter a new mask here"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.currentTarget.value.length) {
              setNewMask(e.currentTarget.value);
            }
          }} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}

export default MaskSettings ;
