import { createTheme, Grid } from "@mantine/core";

export const ThemeDefault = createTheme({
    fontFamily: 'Rubik, sans-serif',
    components: {
        Grid: Grid.extend({
            defaultProps: {
                display: 'flex'
            }
        })
    }
})