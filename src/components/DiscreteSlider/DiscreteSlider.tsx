import React, { ChangeEvent, useMemo, useState } from 'react';
import './DiscreteSlider.scss';

interface DiscreteSliderProps {
    handleSize: 'Size_24' | 'Size_32';
    steps: number;
    handleChange: (value: { value: number }) => void;
    min?: number;
    max?: number;
    initialValue?: number;
}

export const DiscreteSlider = ({ steps, handleChange, handleSize, min = 0, max = 100, initialValue = 50 }: DiscreteSliderProps) => {
    const [value, setValue] = useState<number>(initialValue);

    const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        handleChange({ value: newValue });
    };

    const stepSize = useMemo(() => (max - min) / steps, [min, max, steps]);
    const numSteps = useMemo(() => {
        const stepsArr = [];
        for (let i = min; i <= max; i += stepSize) {
            stepsArr.push(i);
        }
        return stepsArr;
    }, [min, max, stepSize]);

    return (
        <div className='slider-container'>
            <input
                type="range"
                min={min}
                max={max}
                step={stepSize}
                value={value}
                onChange={onValueChange}
                className={`discrete-slider ${handleSize === 'Size_24' ? 'size-small' : 'size-large'}`}
                style={{
                    backgroundSize: `${((value - min) / (max - min)) * 100}% 100%`
                }}
            />
            <div className="discrete-slider-values">
                {numSteps.map((stepValue) => (
                    <div key={stepValue} className="discrete-slider-step" style={{ left: `${((stepValue - min) / (max - min)) * 100}%` }}>
                        {stepValue}
                    </div>
                ))}
            </div>
        </div>
    );
};
