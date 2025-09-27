
import { SketchCollector } from '../../sketchCollector';

export class LlumCollector extends SketchCollector {

    static CONFIG = {
        id: "llum",
        name: "Llum",
        description: "i18n.collectors.llum.description",
        version: "0",
        website: "https://llum-portail-web.incom-sa.fr/wp/showDisplayBills.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4562006.jpg",
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
        entryUrl: "https://llum-portail-web.incom-sa.fr/wp/showDisplayBills.action",
    }

    constructor() {
        super(LlumCollector.CONFIG);
    }
}
