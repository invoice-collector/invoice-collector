
import { SketchCollector } from '../../sketchCollector';

export class VandebronCollector extends SketchCollector {

    static CONFIG = {
        id: "vandebron",
        name: "Vandebron",
        description: "i18n.collectors.vandebron.description",
        version: "0",
        website: "https://mijn.vandebron.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9551.jpg",
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
        entryUrl: "https://mijn.vandebron.nl/login",
    }

    constructor() {
        super(VandebronCollector.CONFIG);
    }
}
