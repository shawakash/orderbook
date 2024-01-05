import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import { MOBILE_WIDTH } from '@/utils/constants';
import { PriceLevelRowProps } from '@/types/interfaces';


const PriceLevelRow: FunctionComponent<PriceLevelRowProps> = ({
    total,
    size,
    price,
    reversedFieldsOrder = false,
    windowWidth
}) => {
    return (
        <Container data-testid='price-level-row' isRight={!reversedFieldsOrder} windowWidth={windowWidth}>
            {reversedFieldsOrder || windowWidth < MOBILE_WIDTH ?
                <>
                    <span className='price'>{price}</span>
                    <span>{size}</span>
                    <span>{total}</span>
                </> :
                <>
                    <span>{total}</span>
                    <span>{size}</span>
                    <span className='price'>{price}</span>
                </>}
        </Container>
    );
};

export default PriceLevelRow;