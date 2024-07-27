import React, { ChangeEvent, useState } from 'react';
import './ContinuousSlider.scss'

interface ContinuousSliderProps {
    handleSize: string,
    handleChange: ({ }) => void
}
export const ContinuousSlider = ({ handleChange, handleSize }: ContinuousSliderProps) => {
    const [value, setValue] = useState<number>(50);

    const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
        handleChange({ 'Value': Number(event.target.value) });
    };

    return (
        <div className='slider-container'>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={onValueChange}
                className={`continuous-slider ${handleSize == 'Size_24' ? 'size-small' : 'size-large'}`}
                style={{
                    backgroundSize: `${value}% 100%`
                }}
            />
        </div>
    );
};

