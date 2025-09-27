
import { SketchCollector } from '../../sketchCollector';

export class ReclamelandBeCollector extends SketchCollector {

    static CONFIG = {
        id: "reclameland_be",
        name: "Reclameland.be",
        description: "i18n.collectors.reclameland_be.description",
        version: "0",
        website: "https://www.reclameland.be/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32354.jpg",
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
        entryUrl: "https://www.reclameland.be/login",
    }

    constructor() {
        super(ReclamelandBeCollector.CONFIG);
    }
}
