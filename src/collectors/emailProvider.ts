import { Location } from '../proxy/abstractProxy';
import { Secret } from '../model/secret';
import { State } from '../model/state';
import { CompleteInvoice, CollectorAuthenticationMethod, CollectorState, CollectorType, Config } from './abstractCollector';
import { V2Collector } from './v2Collector';
import { WebSocketServer } from '../websocket/webSocketServer';
import { ModelInvoice } from '../model/credential';

export type EmailProviderConfig = Config & {
    authenticationMethod?: CollectorAuthenticationMethod
}

export abstract class EmailProvider<C extends EmailProviderConfig> extends V2Collector<C> {

    constructor(config: C) {
        super({
            ...config,
            type: CollectorType.EMAIL,
            state: config.state || CollectorState.ACTIVE,
            authenticationMethod: config.authenticationMethod || CollectorAuthenticationMethod.SECRETS_ONLY
        });
    }

    async _collect(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: ModelInvoice[],
        locale: string,
        location: Location | null,
        useInteractiveLogin: boolean
    ): Promise<CompleteInvoice[]> {
        await this.authenticate(state, webSocketServer, secret, locale, location, useInteractiveLogin);

        // Email providers only authenticate the account and do not collect invoices.
        return [];
    }

    abstract authenticate(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        locale: string,
        location: Location | null,
        useInteractiveLogin: boolean
    ): Promise<void>;
}