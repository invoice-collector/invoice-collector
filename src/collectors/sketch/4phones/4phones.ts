
import { SketchCollector } from '../../sketchCollector';

export class _4phonesCollector extends SketchCollector {

    static CONFIG = {
        id: "4phones",
        name: "4Phones",
        description: "i18n.collectors.4phones.description",
        version: "0",
        website: "https://4phones.eu/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1802691.jpg",
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
        entryUrl: "https://4phones.eu/account",
    }

    constructor() {
        super(_4phonesCollector.CONFIG);
    }
}
