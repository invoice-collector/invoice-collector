import { AbstractCollector, Config } from "../collectors/abstractCollector";
import { DisconnectedError } from "../error";
import { State } from "../model/state";
import * as utils from "../utils";

export class TwofaPromise{
    static TWOFA_TIMEOUT_MS = 1000 * 60 * 5; // 5 minutes

    private instrcutionsPromise: Promise<string>;
    private instructionsResolve: (value: string) => void;

    private codePromise: Promise<string>;
    private codeResolve: (value: string) => void;

    collector: AbstractCollector<Config> | null = null;
    state : State | null = null;

    constructor() {
        // Instructions promise
        let instructionsResolve;
        this.instrcutionsPromise = new Promise<string>((resolve, reject) => {
            instructionsResolve = resolve;
        });
        this.instructionsResolve = instructionsResolve;

        // Code promise
        let codeResolve;
        this.codePromise = new Promise<string>((resolve, reject) => {
            codeResolve = resolve;
        });
        this.codeResolve = codeResolve;
    }

    async setInstructions(instructions: string): Promise<void> {
        this.instructionsResolve(utils.trim(instructions));
    }

    async instructions(): Promise<string> {
        return await this.instrcutionsPromise;
    }

    async setCode(code: string): Promise<void> {
        this.codeResolve(code);
    }

    async code(instruction?: string): Promise<string> {
        // Set state if instruction
        if (instruction) {
            this.state?.update(State._3_2FA_WAITING, instruction);
        }
        let timeoutPromise;
        if(this.collector != null) {
            const collector = this.collector;
            timeoutPromise = new Promise<string>((_, reject) =>
                setTimeout(() => reject(new DisconnectedError('i18n.collectors.all.2fa.timeout', collector)), TwofaPromise.TWOFA_TIMEOUT_MS)
            )
        }
        else {
            timeoutPromise = new Promise<string>((_, reject) =>
                setTimeout(() => reject(new Error('No 2FA code provided within the alloteted time. Please try again.')), TwofaPromise.TWOFA_TIMEOUT_MS)
            )
        }
        
        return await Promise.race([
            this.codePromise,
            timeoutPromise
        ]);
    }
}