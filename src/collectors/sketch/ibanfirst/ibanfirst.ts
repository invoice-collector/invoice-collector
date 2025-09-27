
import { SketchCollector } from '../../sketchCollector';

export class IbanfirstCollector extends SketchCollector {

    static CONFIG = {
        id: "ibanfirst",
        name: "Ibanfirst",
        description: "i18n.collectors.ibanfirst.description",
        version: "0",
        website: "https://platform.ibanfirst.com/Compte/Documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221829.jpg",
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
        entryUrl: "https://platform.ibanfirst.com/Compte/Documents",
    }

    constructor() {
        super(IbanfirstCollector.CONFIG);
    }
}
