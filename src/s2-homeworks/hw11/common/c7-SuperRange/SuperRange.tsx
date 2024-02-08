import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                "& .MuiSlider-thumb": {
                    backgroundColor: '#00CC22', // Цвет для ползунка слайдера
                },
                "& .MuiSlider-track": {
                    backgroundColor: '#00CC22', // Цвет для невыбранного диапазона
                },
                "& .MuiSlider-rail": {
                    backgroundColor: 'grey', // Цвет для выбранного диапазона
                },
                width: '147px',
                height: '4px '
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
