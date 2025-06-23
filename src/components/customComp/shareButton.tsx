import { Button } from "../ui/button";
import { IconShare } from "@tabler/icons-react"

interface Props {
    text: string;
}

export function ShareButton({text}: Props){
    return(
        <Button>
            <IconShare />
            {text}
        </Button>
    )
}