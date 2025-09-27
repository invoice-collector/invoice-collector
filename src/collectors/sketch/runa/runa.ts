
import { SketchCollector } from '../../sketchCollector';

export class RunaCollector extends SketchCollector {

    static CONFIG = {
        id: "runa",
        name: "Runa",
        description: "i18n.collectors.runa.description",
        version: "0",
        website: "https://connect.runa.io/connect/invoices/?customer=C-ZAWVJJEQ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4195839.jpg",
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
        entryUrl: "https://connect.runa.io/connect/invoices/?customer=C-ZAWVJJEQ",
    }

    constructor() {
        super(RunaCollector.CONFIG);
    }
}
