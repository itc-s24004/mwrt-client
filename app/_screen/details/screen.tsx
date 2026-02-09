import { AppScreen } from "@/screen/screen";
import { Screen_Frame } from "@/screen/screen_frame";
import { ScreenIds } from "../screen";

type Props = AppScreen<ScreenIds> & {
    data: unknown;
};

export function Screen_Details({media, backwardLabel, backward, selectScreen, data, ...props}: Props) {
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
                    Details Screen - {media}
                </>
            }

            bottom={
                <>
                </>
            }
        />
    )
}