class Step {

    index: number;
    i18n: string;

    constructor(index: number, i18n: string) {
        this.index = index;
        this.i18n = i18n;
    }
}

export class Progress {

    static DEFAULT_MAX: number = 5;

    static STEP_0_PREPARING: Step = new Step(0, "Preparing the collect...");
    static STEP_1_LOGGING_IN : Step = new Step(1, "Logging in...");
    static STEP_2_2FA : Step = new Step(2, "2FA...");
    static STEP_3_COLLECTING : Step = new Step(3, "Collecting new invoices...");
    static STEP_4_DOWNLOADING : Step = new Step(4, "Downloading invoices...");
    static STEP_5_DONE : Step = new Step(5, "Done!");

    static STATUS_DEFAULT : Status = {
        max: Progress.DEFAULT_MAX,
        index: Progress.DEFAULT_MAX,
        i18n: Progress.STEP_5_DONE.i18n
    }

    max: number;
    current: Step;

    constructor(max: number = Progress.DEFAULT_MAX) {
        this.max = max;
        this.current = Progress.STEP_0_PREPARING;
    }

    public setStep(current: Step): void {
        this.current = current;
    }

    public getStatus(): Status {
        return {
            max: this.max,
            index: this.current.index,
            i18n: this.current.i18n
        }
    }

    public isComplete(): boolean {
        return this.current.index >= this.max;
    }
}

export type Status = {
    max: number,
    index: number,
    i18n: string
}