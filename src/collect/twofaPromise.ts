import { AbstractCollector } from "../collectors/abstractCollector";
import { AuthenticationError } from "../error";

export class TwofaPromise{
    static TWOFA_TIMEOUT_MS = 1000 * 60 * 0.5; // 2 minutes

    private instrcutionsPromise: Promise<string>;
    private instructionsResolve: (value: string) => void;

    private codePromise: Promise<string>;
    private codeResolve: (value: string) => void;

    collector: AbstractCollector | null = null;

    constructor() {
        // Instructions promise
        let instructionsResolve;
        this.instrcutionsPromise = new Promise<string>((resolve, reject) => {
            instructionsResolve = resolve;
            //setTimeout(reject, TwofaPromise.TWOFA_TIMEOUT_MS)
        });
        this.instructionsResolve = instructionsResolve;

        // Code promise
        let codeResolve;
        this.codePromise = new Promise<string>((resolve, reject) => {
            codeResolve = resolve;
            //setTimeout(reject, TwofaPromise.TWOFA_TIMEOUT_MS)
        });
        this.codeResolve = codeResolve;
    }

    async setInstructions(instructions: string): Promise<void> {
        this.instructionsResolve(instructions.trim());
    }

    async instructions(): Promise<string> {
        return await this.instrcutionsPromise;
    }

    async setCode(code: string): Promise<void> {
        this.codeResolve(code);
    }

    async code(): Promise<string> {
        let timeoutPromise;
        if(this.collector != null) {
            const collector = this.collector;
            timeoutPromise = new Promise<string>((_, reject) =>
                setTimeout(() => reject(new AuthenticationError('i18n.collectors.all.2fa.timeout', collector)), TwofaPromise.TWOFA_TIMEOUT_MS)
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