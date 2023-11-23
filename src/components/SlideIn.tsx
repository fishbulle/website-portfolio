import { Slide } from '@mui/material'

interface Props {
    children: any,
    checked: boolean,
    timeout: number
}

function SlideIn({ children, checked, timeout }: Props) {

    return (
        <Slide direction="up" in={checked} timeout={timeout} mountOnEnter unmountOnExit>
            {children}
        </Slide>
    )
}

export default SlideIn