import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import hero from "../assets/img/hero_01.jpg";
import avatar from "../assets/img/avatar.jpg";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{ bgcolor: red[500] }}
                        aria-label="recipe"
                        src={avatar}
                    />
                }
                title="Філіпчик Наталія Василівна"
                subheader="Лікар терапевт, ендокринолог"
            />
            <CardMedia
                component="img"
                height="194"
                image={hero}
                alt="Profile picture"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Своє завдання, як лікаря, я бачу в тому, щоб не тільки
                    лікувати захворювання, що вже з'явилися, але і попередити їх
                    виникнення і розвиток.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="go to instagram"
                    onClick={() => {
                        window.open(
                            "https://www.instagram.com/dr_filipchyk/",
                            "_blank"
                        );
                    }}
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    aria-label="visite via telegram"
                    onClick={() => {
                        window.open(
                            "https://web.telegram.org/k/#@NataliiaFilipchyk",
                            "_blank"
                        );
                    }}
                >
                    <TelegramIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Загальна інформація:</Typography>
                    <Typography paragraph>
                        Очно прийом в місті Одеса. У своїх схемах лікування
                        використовую стандартну фармакотерапію, гомеопатію,
                        натуропатію (БАД), а також інфузійну -внутрішньовенну
                        терапію (крапельниці) з різних напрямків.
                    </Typography>
                    <Typography paragraph>
                        Використовує індивідуальний підхід для кожної програми
                        лікування . Розбір стану кожного пацієнта відбувається з
                        урахуванням його вікових, територіальних, національних
                        та генетичних особливостей
                    </Typography>
                    <Typography paragraph>
                        Це не просто консультації . Це чіткі настанови на
                        майбутнє. Профілактика майбутніх захворювань. Після
                        консультації змінюється погляд та ставлення до життя,
                        підвищується свідомість до свого організму.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
