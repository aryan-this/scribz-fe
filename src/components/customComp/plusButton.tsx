type Props = {
  text: string;
  onClick: ()=> void
};

import { Button } from "@/components/ui/button"
import { IconPlus } from "@tabler/icons-react"

export function PlusButton({text, onClick}: Props){
    return(
        <Button onClick={onClick} variant ='default' size='default'>
            <IconPlus />
            {text}
        </Button>
    )
}