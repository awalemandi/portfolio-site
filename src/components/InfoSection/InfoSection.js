import React from 'react'
import { Button } from '../Button';
import ContactForm from '../ContactForm';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ButtonWrap,
    ImageWrap,
    Image,
    Input
} from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, firstHeadline, secondHeadline, firstParagraph, secondParagraph, thirdParagraph, primary, scrollTo, dark, darkText, buttonLabel, img, alt, content}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{firstHeadline}</Heading>
                                <Subtitle darkText={darkText}>{firstParagraph}</Subtitle>
                                <Heading lightText={lightText}>{secondHeadline}</Heading>
                                <Subtitle darkText={darkText}>{secondParagraph}</Subtitle>
                                {content ? <ContactForm /> : <></>}
                                <Subtitle darkText={darkText}>{thirdParagraph}</Subtitle>
                                <ButtonWrap>
                                    <Button
                                        to={scrollTo}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        // dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrap>
                                <Image src={img} alt={alt}/>
                            </ImageWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
