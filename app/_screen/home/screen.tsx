import { AppScreen } from "@/screen/screen";
import { ScreenIds } from "../screen";
import { Screen_Frame } from "@/screen/screen_frame";

type Props = AppScreen<ScreenIds>

export function Screen_Home({media, backwardLabel, backward, ...props}: Props) {
    return (
        <Screen_Frame
            backwardLabel={backwardLabel}
            backward={backward}
            top={
                <>
                </>
            }
            center={
                <>
                    Home Screen - {media}
                </>
            }
            bottom={
                <>
                </>
            }
        />
    )
}