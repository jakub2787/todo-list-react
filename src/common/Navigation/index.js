import { toAuthor, toTasks } from "../../routes";
import { NavigationStyled, List, ListItem, NavigationLink } from "./styled";

const Navigation = () => (
    <NavigationStyled>
        <List>
            <ListItem>
                <NavigationLink to={toTasks()}>Zadania</NavigationLink>
            </ListItem>
            <ListItem>
                <NavigationLink to={toAuthor()}>O autorze</NavigationLink>
            </ListItem>
        </List>
    </NavigationStyled>
);

export default Navigation;