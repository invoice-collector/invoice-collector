
import { SketchCollector } from '../../sketchCollector';

export class GreenchoiceBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "greenchoice_business",
        name: "Greenchoice Business",
        description: "i18n.collectors.greenchoice_business.description",
        version: "0",
        website: "https://mijn.greenchoicezakelijk.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1927846.jpg",
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
        entryUrl: "https://mijn.greenchoicezakelijk.nl/login",
    }

    constructor() {
        super(GreenchoiceBusinessCollector.CONFIG);
    }
}
