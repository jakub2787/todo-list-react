import { SectionHeader, StyledSection, SectionBody, SectionContainer } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionContainer>
            <SectionHeader>{title}</SectionHeader>
            {extraHeaderContent}
        </SectionContainer>
        <SectionBody>
            {body}
        </SectionBody>
    </StyledSection>
)
export default Section;