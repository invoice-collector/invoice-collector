
import { SketchCollector } from '../../sketchCollector';

export class AfiniaByIahorroCollector extends SketchCollector {

    static CONFIG = {
        id: "afinia_by_iahorro",
        name: "Afinia by iAhorro",
        description: "i18n.collectors.afinia_by_iahorro.description",
        version: "0",
        website: "https://afinia.uintertool.com/#/pinvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510872.jpg",
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
        entryUrl: "https://afinia.uintertool.com/#/pinvoices",
    }

    constructor() {
        super(AfiniaByIahorroCollector.CONFIG);
    }
}
