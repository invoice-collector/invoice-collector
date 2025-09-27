
import { SketchCollector } from '../../sketchCollector';

export class WindunieCollector extends SketchCollector {

    static CONFIG = {
        id: "windunie",
        name: "Windunie",
        description: "i18n.collectors.windunie.description",
        version: "0",
        website: "https://www.windunie.nl/inloggen/?URL=/mijn-windunie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9544.jpg",
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
        entryUrl: "https://www.windunie.nl/inloggen/?URL=/mijn-windunie/",
    }

    constructor() {
        super(WindunieCollector.CONFIG);
    }
}
