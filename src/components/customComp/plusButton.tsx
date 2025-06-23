type Props = {
  text: string;
};

import { Button } from "@/components/ui/button"
import { IconPlus } from "@tabler/icons-react"

export function PlusButton({text}: Props){
    return(
        <Button variant ='default' size='default'>
            <IconPlus />
            {text}
        </Button>
    )
}