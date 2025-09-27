
import { SketchCollector } from '../../sketchCollector';

export class CliniqueDuCheveuCollector extends SketchCollector {

    static CONFIG = {
        id: "clinique_du_cheveu",
        name: "Clinique du Cheveu",
        description: "i18n.collectors.clinique_du_cheveu.description",
        version: "0",
        website: "http://www.cliniqueducheveu.be/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117760.jpg",
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
        entryUrl: "http://www.cliniqueducheveu.be/",
    }

    constructor() {
        super(CliniqueDuCheveuCollector.CONFIG);
    }
}
