
import { SketchCollector } from '../../sketchCollector';

export class MemodoCollector extends SketchCollector {

    static CONFIG = {
        id: "memodo",
        name: "Memodo",
        description: "i18n.collectors.memodo.description",
        version: "0",
        website: "https://www.memodo.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43132.jpg",
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
        entryUrl: "https://www.memodo.de/account/orders",
    }

    constructor() {
        super(MemodoCollector.CONFIG);
    }
}
