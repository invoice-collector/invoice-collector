import { Credential, ModelInvoice } from '../../../model/credential';
import { Secret } from '../../../model/secret';
import { State } from '../../../model/state';
import { Location } from '../../../proxy/abstractProxy';
import { WebSocketServer } from '../../../websocket/webSocketServer';
import { CollectorState, CollectorType, CompleteInvoice } from '../../abstractCollector';
import { EmailCollector } from '../../emailCollector';

export class CustomEmailCollector extends EmailCollector {

    static CONFIG = {
        id: 'custom_email',
        name: 'i18n.collectors.custom_email.name',
        description: 'i18n.collectors.custom_email.description',
        version: '1',
        website: 'https://custom_email.io',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Email_icon.png',
        type: CollectorType.EMAIL,
        params: {
            wildcardSender: {
                type: 'string',
                name: 'i18n.collectors.custom_email.wildcardSender',
                placeholder: 'i18n.collectors.custom_email.wildcardSender.placeholder',
                mandatory: true,
            },
            wildcardSubject: {
                type: 'string',
                name: 'i18n.collectors.custom_email.wildcardSubject',
                placeholder: 'i18n.collectors.custom_email.wildcardSubject.placeholder',
                mandatory: true,
            },
            wildcardBody: {
                type: 'string',
                name: 'i18n.collectors.custom_email.wildcardBody',
                placeholder: 'i18n.collectors.custom_email.wildcardBody.placeholder',
                mandatory: true,
            },
            wildcardAttachmentName: {
                type: 'string',
                name: 'i18n.collectors.custom_email.wildcardAttachmentName',
                placeholder: 'i18n.collectors.custom_email.wildcardAttachmentName.placeholder',
                mandatory: true,
            },
        },
        wildcards: {
            sender: '*',
            subject: '*',
            body: '*',
            attachmentName: '*',
        },
        state: CollectorState.ACTIVE,
    };

    /**
     * Constructs a new instance of the CustomEmailCollector class.
     */
    constructor() {
        super(CustomEmailCollector.CONFIG);
    }

    /**
     * @inheritdoc
     */
    async _collect(
        state: State,
        webSocketServer: WebSocketServer | undefined,
        secret: Secret,
        download_from_timestamp: number,
        previousInvoices: ModelInvoice[],
        locale: string,
        location: Location | null,
        useInteractiveLogin: boolean,
        providers: Credential[],
    ): Promise<CompleteInvoice[]> {
        // Get params fro secrets
        const params = await secret.getParams();

        // Replace config wild card with params
        this.config.wildcards.sender = params.wildcardSender;
        this.config.wildcards.subject = params.wildcardSubject;
        this.config.wildcards.body = params.wildcardBody;
        this.config.wildcards.attachmentName = params.wildcardAttachmentName;

        // Call parent method
        return super._collect(
            state,
            webSocketServer,
            secret,
            download_from_timestamp,
            previousInvoices,
            locale,
            location,
            useInteractiveLogin,
            providers,
        );
    }
}
