
import { SketchCollector } from '../../sketchCollector';

export class IlmProviderCollector extends SketchCollector {

    static CONFIG = {
        id: "ilm_provider",
        name: "Ilm-Provider",
        description: "i18n.collectors.ilm_provider.description",
        version: "0",
        website: "https://service.ilm-provider.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9526.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://service.ilm-provider.de/",
    }

    constructor() {
        super(IlmProviderCollector.CONFIG);
    }
}
