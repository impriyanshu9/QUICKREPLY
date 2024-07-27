import React, { ChangeEvent, useState } from 'react';
import './RangeSlider.scss';

interface RangeSliderProps {
    handleSize: 'Size_24' | 'Size_30'; // Assuming handleSize can be 'Size_24' or 'Size_30'
    handleChange: (range: { min: number; max: number }) => void;
}

export const RangeSlider = ({ handleChange, handleSize }: RangeSliderProps) => {
    const [minValue, setMinValue] = useState<number>(20);
    const [maxValue, setMaxValue] = useState<number>(80);
    const min = 0;
    const max = 100;

    const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), maxValue - 1);
        setMinValue(value);
        handleChange({ min: value, max: maxValue });
    };

    const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), minValue + 1);
        setMaxValue(value);
        handleChange({ min: minValue, max: value });
    };

    const thumbSizeClass = handleSize === 'Size_24' ? 'size-small' : 'size-large';

    return (
        <div className="range-slider">
            <input
                type="range"
                min={min}
                max={max}
                value={minValue}
                onChange={handleMinChange}
                className={`thumb thumb-left ${thumbSizeClass}`}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxValue}
                onChange={handleMaxChange}
                className={`thumb thumb-right ${thumbSizeClass}`}
            />
            <div className="slider">
                <div className="track"></div>
                <div
                    className="range"
                    style={{
                        left: `${(minValue / max) * 100}%`,
                        right: `${100 - (maxValue / max) * 100}%`,
                    }}
                ></div>
            </div>
        </div>
    );
};
