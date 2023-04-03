import styled from 'styled-components';
import { ButtonInterface } from './Button.type';

const ButtonStyled = styled.button<ButtonInterface>`
    border: 1px solid #e7e1e1;
    min-height: ${props => props.height ? `${props.height}px` : "52px"};
    background-color: #FFFFFF;
    transition: 0.5s;
    border-radius: 5px;
    &:hover {
        background-color: #e4e4e4;
        transform: scale(0.98);
    }
`;

const Button = (props: ButtonInterface) => {
    return <ButtonStyled height={props.height} {...props} className='flex flex-row items-center justify-center'>
        {props.icon && <img src={props.icon} className='mr-2' alt={props.iconAlt} />}
        <span className='text-darkGray font-bold text-sm'>{props.text}</span>
    </ButtonStyled>
};

export default Button;