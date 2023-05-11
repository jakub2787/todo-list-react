import { Paragraph, Image, ContainerImage, FlexItem, Tittle } from "./styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Container from "../../common/Container";
import AuthorPhoto from "./AuthorPhoto.jpg";

const AuthorPage = () => {
    return (
        <Container>
            <Header title="O autorze" />

            <Section
                title="Jakub Woźny"
                body={
                    <>
                        <ContainerImage>
                            <Image src={AuthorPhoto} alt="Moje zdjęcie"></Image>
                        </ContainerImage>
                        <FlexItem>
                            <Paragraph>
                                <Tittle>O mnie</Tittle>
                                Mam 20 lat mieszkam w <strong>Ustrzykach Dolnych</strong> w małej miejscowości w
                                <strong> Bieszczadach</strong>. Skończyłem liceum
                                na kierunku informatycznym, programowałem w <i>C++</i> jednak nie było to dla mnie dlatego
                                zdecydowałem się na <i>JS</i> <em>i z nim zostanę </em>. Posługuję się językiem angielskim w stopniu średnio 
                                zaawansowanym jednak ciągle uczę się tego języka i rozwijam w tym kierunku.
                            </Paragraph>
                            <Paragraph>
                                <Tittle>Zainteresowania</Tittle>
                                Interesuję się <strong>technologią</strong> a dokładniej mówiąc komputerem, jego wszystkimi podzespołami
                                takimi jak karty
                                graficzne, procesory, płyty główne i wiele więcej. Lubię również w wolnym czasem pływać na basenie,
                                pograć w gry oraz <br></br>w szachy.
                            </Paragraph>
                        </FlexItem>
                    </>
                }
            >
            </Section>
        </Container>
    )
};

export default AuthorPage;