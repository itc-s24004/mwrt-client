"use client";


import { ButtonStyles, PlainButton } from "@/page_components/form/button";
import { useEffect, useState } from "react";

import styles from "./index.module.css";
import { MergeAttributes, MergeClassNames } from "@/libs/CustomAttribute";

type Options = React.HTMLAttributes<HTMLDivElement> & {
    custom: {
        allowLap?: boolean;
        onStart?: () => void;
        onStop?: (time: number) => void;
        onLap?: (time: number) => void;
    }
};

const buttonStyles = MergeClassNames(ButtonStyles.HoverScale, ButtonStyles.Transition);

export function Timer(options: Options) {
    const { custom, ...props } = options;

    //タイマー開始時刻をmsで管理
    const [startTime, setStartTime] = useState<number>(0);
    //経過時間をmsで管理
    const [time, setTime] = useState(0);
    //停止時の時間を保存するためのstate
    const [resultTime, setResultTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const tick = () => {
            setTime(performance.now());
            requestAnimationFrame(tick);
        };
        tick();

    }, []);

    const current = running ? time - startTime : resultTime;
    
    return <div {...MergeAttributes(props, {className: MergeClassNames(styles.timerContainer, !running ? styles.border_red : "")})}>
        <div className={styles.timeDisplay}>Time: {(current / 1000).toFixed(2)}s</div>
        <div className={styles.controllContainer}>
            <PlainButton className={buttonStyles} onClick={() => {
                if (!running) {
                    custom.onStart?.();
                    setStartTime(performance.now());
                    setRunning(true);
                }
            }} disabled={running}>
                Start
            </PlainButton>
            
            <PlainButton className={buttonStyles} onClick={() => {
                if (running) {
                    setRunning(false);
                    setResultTime(current);
                    setTime(0);
                    custom.onStop?.(current);
                }
            }} disabled={!running}>
                Stop
            </PlainButton>

            {
                custom.allowLap &&
                <PlainButton className={buttonStyles} onClick={() => {
                    if (running) {
                        custom.onLap?.(current);
                    }
                }} disabled={!running}>
                    Lap
                </PlainButton>
            }
        </div>
    </div>;
}