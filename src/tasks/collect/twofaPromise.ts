import { AbstractCollector, Config } from '../../collectors/abstractCollector';
import { DisconnectedError } from '../../error';
import { State } from '../../model/state';
import * as utils from '../../utils';

export class TwofaPromise{
    static TWOFA_TIMEOUT_MS = 1000 * 60 * 5; // 5 minutes

    private instrcutionsPromise: Promise<string>;
    private instructionsResolve: (value: string) => void;

    private codePromise: Promise<string>;
    private codeResolve: (value: string) => void;

    collector: AbstractCollector<Config> | null = null;
    state : State | null = null;

    /**
     * Constructs an instance of the TwofaPromise class, initializing the promises for instructions and 2FA code.
     * @deprecated This class is deprecated and will be removed as soon as customers switch to websockets integration.
     */
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

    /**
     * Sets the instructions for the 2FA process to be displayed to the user.
     * @param instructions The instructions for the 2FA process.
     */
    async setInstructions(instructions: string): Promise<void> {
        this.instructionsResolve(utils.trim(instructions));
    }

    /**
     * Gets the instructions for the 2FA process to be displayed to the user.
     * @returns The instructions for the 2FA process.
     */
    async instructions(): Promise<string> {
        return await this.instrcutionsPromise;
    }

    /**
     * Sets the 2FA code provided by the user.
     * @param code The 2FA code.
     */
    async setCode(code: string): Promise<void> {
        this.codeResolve(code);
    }

    /**
     * Gets the 2FA code, waiting for the user to provide it or timing out after a specified duration.
     * @param instruction Optional instruction to update the state with.
     * @returns The 2FA code provided by the user.
     */
    async code(instruction?: string): Promise<string> {
        // Set state if instruction
        if (instruction) {
            this.state?.update(State._3_2FA_WAITING, instruction);
        }
        let timeoutPromise;
        if(this.collector !== null) {
            const collector = this.collector;
            timeoutPromise = new Promise<string>((_, reject) =>
                setTimeout(() => reject(new DisconnectedError('i18n.collectors.all.2fa.timeout', collector)), TwofaPromise.TWOFA_TIMEOUT_MS),
            );
        }
        else {
            timeoutPromise = new Promise<string>((_, reject) =>
                setTimeout(() => reject(new Error('No 2FA code provided within the allotted time. Please try again.')), TwofaPromise.TWOFA_TIMEOUT_MS),
            );
        }
        
        return await Promise.race([
            this.codePromise,
            timeoutPromise,
        ]);
    }
}