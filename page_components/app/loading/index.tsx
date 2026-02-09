import { MergeAttributes } from "@/libs/CustomAttribute";
import styles from "./index.module.css";
import { UI_Screen_Fill } from "@/page_components/screen/fill";


export function APP_Loading(props: React.HTMLAttributes<HTMLElement>) {
    return (
        <UI_Screen_Fill {...MergeAttributes(props, { className: styles.container })}>
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <div className={styles.text}>Loading...</div>
            </div>
        </UI_Screen_Fill>
    );
}

