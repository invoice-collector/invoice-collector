
import { SketchCollector } from '../../sketchCollector';

export class AntagonistCollector extends SketchCollector {

    static CONFIG = {
        id: "antagonist",
        name: "antagonist",
        description: "i18n.collectors.antagonist.description",
        version: "0",
        website: "https://mijn.antagonist.nl/accounts/login/?next=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32306.jpg",
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
        entryUrl: "https://mijn.antagonist.nl/accounts/login/?next=/",
    }

    constructor() {
        super(AntagonistCollector.CONFIG);
    }
}
