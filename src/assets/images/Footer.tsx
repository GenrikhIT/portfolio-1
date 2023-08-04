import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column' align='center'>
            <Name>Genrikh</Name>
            <SocialList>
                <SocialItem>
                <SocialLink>
                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                </SocialLink>
                </SocialItem>
                <SocialItem>
                <SocialLink>
                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                </SocialLink>
                </SocialItem>
                <SocialItem>
                <SocialLink>
                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                </SocialLink>
                </SocialItem>
                <SocialItem>
                <SocialLink>
                    <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>© 2023 Genrikh Lesser, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #f3bd93;
    min-height: 20vh;
`
const Name = styled.span`
    
`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    
`
const SocialItem = styled.li`
    
`