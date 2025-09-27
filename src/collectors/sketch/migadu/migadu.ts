
import { SketchCollector } from '../../sketchCollector';

export class MigaduCollector extends SketchCollector {

    static CONFIG = {
        id: "migadu",
        name: "migadu",
        description: "i18n.collectors.migadu.description",
        version: "0",
        website: "https://admin.migadu.com/public/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/927156.jpg",
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
        entryUrl: "https://admin.migadu.com/public/login",
    }

    constructor() {
        super(MigaduCollector.CONFIG);
    }
}
