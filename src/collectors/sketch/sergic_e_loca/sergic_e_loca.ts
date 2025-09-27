
import { SketchCollector } from '../../sketchCollector';

export class SergicELocaCollector extends SketchCollector {

    static CONFIG = {
        id: "sergic_e_loca",
        name: "Sergic - E-Loca",
        description: "i18n.collectors.sergic_e_loca.description",
        version: "0",
        website: "https://www.sergic.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108735.jpg",
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
        entryUrl: "https://www.sergic.com/",
    }

    constructor() {
        super(SergicELocaCollector.CONFIG);
    }
}
