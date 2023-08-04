import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/Button';
import { SectionTitle } from '../../../components/SectionTitle';

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Filed placeholder='name'/>
                <Filed placeholder='subject'/>
                <Filed placeholder='message' as={'textarea'}/>
                <Button>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
 min-height: 50vh;
 background-color: #faf4cd   
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Filed = styled.input`
    
`