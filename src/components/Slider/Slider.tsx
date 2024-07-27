import { RangeSlider } from '../RangeSlider/RangeSlider'
import { ContinuousSlider } from '../ContinuousSlider/ContinuousSlider'
import { DiscreteSlider } from '../DiscreteSlider/DiscreteSlider'
interface SliderProps {
    type?: "Continuous" | "Discrete",
    subtype?: 'Single' | 'Range',
    steps: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    handleSize: 'Size_24' | 'Size_32',
    handleChange: () => void
}

export const Slider = ({ type, subtype, steps, handleSize, handleChange }: SliderProps) => {
    if (subtype == 'Range') {
        return <RangeSlider handleChange={handleChange} handleSize={handleSize} />
    }
    if (type == 'Continuous') {
        return <ContinuousSlider handleChange={handleChange} handleSize={handleSize} />
    }
    if (type == 'Discrete')
        return <DiscreteSlider steps={steps} handleChange={handleChange} handleSize={handleSize} />

}
