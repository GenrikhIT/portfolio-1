import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/icon/Slider';
import { SectionTitle } from '../../../components/SectionTitle';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction='column' align='center'>
            <Icon iconId={'quote'}/>
            <Slider/>
            </FlexWrapper>
            
            
        </StyledTestimony>
    );
};

const StyledTestimony =styled.section`
    background-color: #c1bcf6;
`