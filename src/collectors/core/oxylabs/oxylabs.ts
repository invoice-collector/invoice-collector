import { CollectorType } from '../../abstractCollector';
import { EmailCollector, EmailCollectorConfig } from '../../emailCollector';

export class OxylabsCollector extends EmailCollector<EmailCollectorConfig> {

    static CONFIG = {
        id: 'oxylabs',
        name: 'Oxylabs',
        description: 'i18n.collectors.oxylabs.description',
        version: '1',
        website: 'https://oxylabs.io',
        logo: 'https://www.google.com/s2/favicons?domain=oxylabs.io&sz=128',
        type: CollectorType.EMAIL,
        params: {},
        senderRegex: 'notifications@oxylabs.io',
        subjectRegex: 'Your Oxylabs Invoice',
        bodyRegex: '*',
        attachmentNameRegex: '*.pdf'
    }

    constructor() {
        super(OxylabsCollector.CONFIG);
    }
}
