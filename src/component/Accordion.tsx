import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Divider } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>("panel1");

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div style={{ marginTop: "20px" }}>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    <Typography>Лікувальна консультація</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography paragraph>
                        Консультація проводиться з питань захворювань
                        шлунково-кишкового тракту (гастрит, дуоденіт,
                        холецистит, панкреатит, хронічні закрепи та діареї,
                        дісбиоз, парзитоз)
                    </Typography>
                    <Typography paragraph>
                        - патології ендокринної системи (інсуліно- та
                        лептинорезистентності, гіпотиреозу, цукрового діабету
                        2-го типу, станів з дефіцитом стероїдних гормонів у
                        жінок, при андрогенному дефіциті у чоловіків та при
                        іншіх ендокринних патологіях;
                    </Typography>
                    <Typography paragraph>
                        - анемії та інших дефіцитних вітамінно-мінеральних
                        станів;
                    </Typography>
                    <Typography paragraph>
                        - синдрому хронічної втоми; тривожного синдрому,
                        порушеннях сну;
                    </Typography>
                    <Typography paragraph>
                        - підбору біоідентичних пеллет для установки;
                    </Typography>
                    <Typography paragraph>
                        - порушення якості шкірного покриву (висипки, знижений
                        тонус тургору, сухость шкіри і т.п.)
                    </Typography>
                    <Typography paragraph>- випадіння волосся</Typography>
                    <Typography paragraph>
                        - підбору базових вітамінних комплексів для підтримки
                        організму або підготовки до вагітності;
                    </Typography>
                    <Typography paragraph>
                        - проводиться завжди при першому зверненні (ніколи не
                        починаємо з дієтологічного консультування).
                    </Typography>
                    <Divider />
                    <Typography mt={2} paragraph>
                        Лікувальна консультація проводиться на протязі 60-90
                        хвилин первинна , 30-60 хвилин повторна.
                    </Typography>
                    <Typography paragraph>
                        1. Збір інформації щодо скарг, анамнезу захворювання та
                        стану всіх систем організму, гінекологічного анамнезу
                        (для жінок), нутриціологічного анамнезу, сімейного
                        анамнезу, сексуального анамнезу
                    </Typography>
                    <Typography paragraph>
                        2. Постановка попереднього або заключного діагнозу
                    </Typography>
                    <Typography paragraph>
                        3. Призначення лабораторних та інструментальних
                        досліджень;
                    </Typography>
                    <Typography paragraph>
                        4. Інтерпретація лабораторних та інструментальних
                        досліджень
                    </Typography>
                    <Typography paragraph>5. Призначення лікування;</Typography>
                    <Typography paragraph>
                        6. Обговорення контролю лікування, корекція доз при
                        повторному зверненні на консультацію.
                    </Typography>
                    <Divider />
                    <CardActions disableSpacing>
                        <Typography>Записатися на консультацію</Typography>
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
                    </CardActions>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography>Дієтологічна консультація </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography paragraph>
                        Дієтологічна консультація проводиться:для корекції ваги
                        (зменшення чи збільшення ); для лікування захворювань,
                        які супроводжують порушення ШКТ та ендокринної системи;
                        для детального розбору та оптимізації харчування з метою
                        профілактики старіння організма.
                    </Typography>
                    <Divider />
                    <Typography mt={2} paragraph>
                        Дієтологічна консультація загальною тривалістю 40-60 хв.
                        проводиться додатково тільки після лікувальної, та
                        включає:
                    </Typography>
                    <Typography paragraph>
                        1. Розбір продуктового кошика на тиждень
                    </Typography>
                    <Typography paragraph>
                        2. Складання лікувального кошика на тиждень з
                        урахуванням результатів аналізів та поставлених
                        висновків щодо стану здоров’я
                    </Typography>
                    <Typography paragraph>
                        3. Підбір калоража, розрахунок білків, жирів та
                        вуглеводів
                    </Typography>
                    <Typography paragraph>
                        4. Навчання складати меню самостійно на декілька днів на
                        сніданок, обід та вечерю
                    </Typography>
                    <Divider />
                    <CardActions disableSpacing>
                        <Typography>Записатися на консультацію</Typography>
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
                    </CardActions>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
