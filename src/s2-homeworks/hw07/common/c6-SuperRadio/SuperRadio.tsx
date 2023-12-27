import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'
import { UserHW7type } from '../../HW7'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: UserHW7type[]
    onChangeOption?: (option: any) => void
    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {

    console.log('Incoming value', value);

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Function value', e.currentTarget.value);
        if(onChangeOption) {
            onChangeOption(+e.currentTarget.value)
        }
    }


    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[]= options
        ? options.map((o) => {
            console.log({itemId: o.id, value})

            return (
                <label key={name + '-' + o.id} className={s.label}>
                    <input
                        id={id + '-input-' + o.id}
                        className={finalRadioClassName}
                        type={'radio'}
                        value={o.id}
                        name={'userType'}

                        checked={o.id === value}
                      // name, checked, value делают студенты

                        onChange={onChangeCallback}
                        {...restProps}
                    />
                    <span
                        id={id + '-span-' + o.id}
                        {...spanProps}
                        className={spanClassName}
                    >
                        {o.value}
                    </span>
              </label>
          )
        })
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
