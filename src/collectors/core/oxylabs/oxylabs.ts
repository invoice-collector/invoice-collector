import { CollectorType } from '../../abstractCollector';
import { EmailCollector } from '../../emailCollector';

export class OxylabsCollector extends EmailCollector {

    static CONFIG = {
        id: 'oxylabs',
        name: 'Oxylabs',
        description: 'i18n.collectors.oxylabs.description',
        version: '1',
        website: 'https://oxylabs.io',
        logo: 'https://www.google.com/s2/favicons?domain=oxylabs.io&sz=128',
        type: CollectorType.EMAIL,
        params: {},
        wildcards: {
            sender: 'notifications@oxylabs.io',
            subject: 'Your Oxylabs Invoice',
            body: '*',
            attachmentName: '*.pdf'
        }
    }

    constructor() {
        super(OxylabsCollector.CONFIG);
    }
}
