
import { SketchCollector } from '../../sketchCollector';

export class MaxiburoCollector extends SketchCollector {

    static CONFIG = {
        id: "maxiburo",
        name: "Maxiburo",
        description: "i18n.collectors.maxiburo.description",
        version: "0",
        website: "https://www.maxiburo.fr/Client/Identification?ReturnUrl=%2fmon-compte%2faccueil.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122297.jpg",
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
        entryUrl: "https://www.maxiburo.fr/Client/Identification?ReturnUrl=%2fmon-compte%2faccueil.htm",
    }

    constructor() {
        super(MaxiburoCollector.CONFIG);
    }
}
