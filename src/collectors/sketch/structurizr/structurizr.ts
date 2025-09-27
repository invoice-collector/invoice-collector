
import { SketchCollector } from '../../sketchCollector';

export class StructurizrCollector extends SketchCollector {

    static CONFIG = {
        id: "structurizr",
        name: "Structurizr",
        description: "i18n.collectors.structurizr.description",
        version: "0",
        website: "https://structurizr.com/user/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479618.jpg",
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
        entryUrl: "https://structurizr.com/user/invoices",
    }

    constructor() {
        super(StructurizrCollector.CONFIG);
    }
}
