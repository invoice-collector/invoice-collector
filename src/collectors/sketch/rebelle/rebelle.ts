
import { SketchCollector } from '../../sketchCollector';

export class RebelleCollector extends SketchCollector {

    static CONFIG = {
        id: "rebelle",
        name: "Rebelle",
        description: "i18n.collectors.rebelle.description",
        version: "0",
        website: "https://www.rebelle.com/profile/commercials",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/189968.jpg",
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
        entryUrl: "https://www.rebelle.com/profile/commercials",
    }

    constructor() {
        super(RebelleCollector.CONFIG);
    }
}
