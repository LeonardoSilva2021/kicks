import { Grid, Title } from "@mantine/core"
import { useStyles } from "./content-presentedion-styles"
import { CardPresentedion } from "../../../../../components/cards/presentedion/card-presentedion";

export const ContentPresentedion = () => {

    const classes = useStyles();

    return (
        <>
            <Grid>
                <Grid.Col className={classes.contentLabel}>
                    <Title
                        order={1}
                        className={classes.tittleOne}
                    >
                        DO
                    </Title>
                    <Title
                        order={1}
                        className={classes.tittleOne}
                    >
                        IT
                    </Title>
                    <Title
                        order={1}
                        className={classes.tittleSecond}
                    >
                        RIGHT
                    </Title>
                </Grid.Col>
                <Grid.Col>
                    <CardPresentedion />
                </Grid.Col>
            </Grid>
        </>
    )
}