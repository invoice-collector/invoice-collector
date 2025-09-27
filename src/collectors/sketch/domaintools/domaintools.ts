
import { SketchCollector } from '../../sketchCollector';

export class DomaintoolsCollector extends SketchCollector {

    static CONFIG = {
        id: "domaintools",
        name: "Domaintools",
        description: "i18n.collectors.domaintools.description",
        version: "0",
        website: "https://account.domaintools.com/my-account/?tab=history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159723.jpg",
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
        entryUrl: "https://account.domaintools.com/my-account/?tab=history",
    }

    constructor() {
        super(DomaintoolsCollector.CONFIG);
    }
}
