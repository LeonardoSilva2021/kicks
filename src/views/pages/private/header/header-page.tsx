import { Badge, Card, Grid, Image, Text } from "@mantine/core"
import { useHeaderStyles } from "./header-page-styles"
import { ArrowBottomIcon } from "../../../components/icons/arrow-bottom/arrow-bottom-icon";
import logo from '../../../../assets/Logo.png';
import { SearchIcon } from "../../../components/icons/search/search-icon";
import { UserIcon } from "../../../components/icons/user/user-icon";

export const HeaderPage = () => {

    const classes = useHeaderStyles();

    return (
        <>
            <div className={classes.cardRoot}>
                <Card className={classes.card}>
                    <Grid className={classes.content}>
                        <Grid.Col span={4} className={classes.headerStart}>
                            <div>
                                <Text
                                    fw={"bold"}
                                    size="md"
                                    className={classes.newDrop}
                                >
                                    New Drops 🔥
                                </Text>
                            </div>
                            <div>
                                <Text
                                    fw={"bold"}
                                    size="md"
                                    className={classes.buttonMenu}
                                >
                                    Men
                                    <ArrowBottomIcon />
                                </Text>
                            </div>
                            <div>
                                <Text
                                    fw={"bold"}
                                    size="md"
                                    className={classes.buttonMenu}
                                >
                                    Woman
                                    <ArrowBottomIcon />
                                </Text>
                            </div>
                        </Grid.Col>
                        <Grid.Col span={4} className={classes.logoContainer}>
                            <Image src={logo} />
                        </Grid.Col>
                        <Grid.Col span={4} className={classes.headerEnd}>
                            <div className={classes.buttonHeaderEnd}>
                                <SearchIcon />
                            </div>
                            <div className={classes.buttonHeaderEnd}>
                                <UserIcon />
                            </div>
                            <div>
                                <Badge
                                    size="lg"
                                    circle
                                    className={classes.notifications}
                                >
                                    0
                                </Badge>
                            </div>
                        </Grid.Col>
                    </Grid>
                </Card>
            </div>
        </>
    )
}