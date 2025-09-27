
import { SketchCollector } from '../../sketchCollector';

export class DochubCollector extends SketchCollector {

    static CONFIG = {
        id: "dochub",
        name: "DocHub",
        description: "i18n.collectors.dochub.description",
        version: "0",
        website: "https://dochub.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109379.jpg",
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
        entryUrl: "https://dochub.com/settings/billing",
    }

    constructor() {
        super(DochubCollector.CONFIG);
    }
}
