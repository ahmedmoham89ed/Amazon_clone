// main color:#FFD814
// light color:#232F3E
// dark color:#131A22
// text color:#000000
// font size:16px
// font family:Inter
// font style:medium
import {createTheme} from "@mui/material/styles";

const theme=createTheme({
    typography:{
        fontFamily:"Inter,sans-serif",
        fontSize:16
    },
    palette:{
        primary:{
            light:'#232F3E',
            main:"#FFD814",
            dark:"#131A22",
            contrastText:"#000000",
        }
    }
});
export default theme;