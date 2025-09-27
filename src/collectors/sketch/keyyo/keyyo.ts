
import { SketchCollector } from '../../sketchCollector';

export class KeyyoCollector extends SketchCollector {

    static CONFIG = {
        id: "keyyo",
        name: "Keyyo",
        description: "i18n.collectors.keyyo.description",
        version: "0",
        website: "https://manager.keyyo.com/manage/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26972.jpg",
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
        entryUrl: "https://manager.keyyo.com/manage/invoices/",
    }

    constructor() {
        super(KeyyoCollector.CONFIG);
    }
}
