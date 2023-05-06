import { NavigationStyled, List, ListItem, NavigationLink } from "./styled";

const Navigation = () => (
    <NavigationStyled>
        <List>
            <ListItem>
                <NavigationLink to="/">Zadania</NavigationLink>
            </ListItem>
            <ListItem>
                <NavigationLink to="./autor">O autorze</NavigationLink>
            </ListItem>
        </List>
    </NavigationStyled>
)

export default Navigation;