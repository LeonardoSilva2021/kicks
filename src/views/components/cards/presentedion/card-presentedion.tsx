import { BackgroundImage, Button, Grid, Image, Text } from "@mantine/core"
import { useStyles } from "./card-presentedion-styles"
import image from '../../../../assets/tenis-presentendion.png'
import imageExample1 from '../../../../assets/image-tenis.png';
import imageExample2 from '../../../../assets/image-tenis2.png';

export const CardPresentedion = () => {

    const classes = useStyles();

    return (
        <>
            <BackgroundImage
                src={image}
                className={classes.card}
            >
                <Grid>
                    <Grid.Col span={12}>
                        <div className={classes.descriptionContent}>
                            <Text className={classes.texto}>
                                Nike product of the year
                            </Text>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6} className={classes.noticeContent}>
                        <div>
                            <Text className={classes.noticeTittle}>
                                NIKE AIR MAX
                            </Text>
                        </div>
                        <div>
                            <Text className={classes.noticeText}>
                                Nike introducing the new air max for everyone's comfort
                            </Text>
                        </div>
                        <div>
                            <Button className={classes.noticeButton}>
                                SHOP NOW
                            </Button>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6} className={classes.cardsContainer}>
                        <div className={classes.cardEmxample2}>
                            <Image
                                src={imageExample2}
                            />
                        </div>
                        <div className={classes.cardEmxample1}>
                            <Image
                                src={imageExample1}
                            />
                        </div>
                    </Grid.Col>
                </Grid>
            </BackgroundImage>
        </>
    )
}