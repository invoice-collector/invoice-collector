
import { SketchCollector } from '../../sketchCollector';

export class DevowlIoCollector extends SketchCollector {

    static CONFIG = {
        id: "devowl_io",
        name: "Devowl.io",
        description: "i18n.collectors.devowl_io.description",
        version: "0",
        website: "https://devowl.io/account/#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732302.jpg",
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
        entryUrl: "https://devowl.io/account/#/invoices",
    }

    constructor() {
        super(DevowlIoCollector.CONFIG);
    }
}
