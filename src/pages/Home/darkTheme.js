import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#C14FE6" },
        text: { primary: "#FFF" },
    },
    components: {
        MuiPickersPopper: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#1C1C24",
                    color: "#FFF",
                },
            },
        },
        MuiCalendarOrClockPicker: {
            styleOverrides: {
                root: {
                    backgroundColor: "#1C1C24",
                },
            },
        },
        MuiDayCalendarHeader: {
            styleOverrides: {
                weekdayLabel: {
                    color: "#FFF",
                    fontWeight: "700",
                },
                label: {
                    color: "#FFF",
                },
                switchViewButton: {
                    color: "#C14FE6",
                },
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    color: "#E3D8FF",
                    borderRadius: "10px",
                    "&:hover": {
                        backgroundColor: "rgba(193,79,230,0.25)",
                    },
                    "&.Mui-selected": {
                        backgroundColor: "#C14FE6 !important",
                        color: "white !important",
                    },
                },
                today: {
                    border: "1px solid #C14FE6",
                },
            },
        },
    },
});

export default darkTheme;
