import { Paragraph, Image, ContainerImage } from "./styled";
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

                        <Paragraph>Mam <b>19 lat</b> mieszkam w <strong>Ustrzykach Dolnych</strong> w małej miejscowości w
                            <strong> Bieszczadach</strong>. Skończyłem liceum
                            na kierunku informatycznym, programowałem w <i>C++</i> jednak nie było to dla mnie dlatego
                            zdecydowałem się na <i>JS</i> <em>i z nim zostanę.</em></Paragraph>
                        <Paragraph>Interesuję się <strong>technologią</strong> a dokładniej mówiąc komputerem, jego wszystkimi podzespołami
                            takimi jak karty
                            graficzne, procesory, płyty główne i wiele więcej. Lubię również w wolnym czasem pływać na basenie oraz
                            pograć w gry</Paragraph>
                    </>
                }
            >
            </Section>
        </Container>
    )
}

export default AuthorPage;