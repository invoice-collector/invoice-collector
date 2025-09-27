
import { SketchCollector } from '../../sketchCollector';

export class XanoCollector extends SketchCollector {

    static CONFIG = {
        id: "xano",
        name: "Xano",
        description: "i18n.collectors.xano.description",
        version: "0",
        website: "https://app.xano.com/admin/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/771826.jpg",
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
        entryUrl: "https://app.xano.com/admin/login",
    }

    constructor() {
        super(XanoCollector.CONFIG);
    }
}
