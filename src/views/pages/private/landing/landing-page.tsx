import { Grid, ScrollArea } from "@mantine/core";
import { ContentPresentedion } from "./components/content-presentation/content-presentedion"
import { useStyles } from "./landing-page-styles"
import { NewDrops } from "./components/new-drops/new-drops";

export const LandingPage = () => {

    const classes = useStyles();

    return (
        <>
            <ScrollArea type="never">
                <Grid className={classes.root}>
                    <Grid.Col>
                        <ContentPresentedion />
                    </Grid.Col>
                    <Grid.Col>
                        <NewDrops />
                    </Grid.Col>
                </Grid>
            </ScrollArea>
        </>
    )
}