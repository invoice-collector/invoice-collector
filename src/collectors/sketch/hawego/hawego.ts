
import { SketchCollector } from '../../sketchCollector';

export class HawegoCollector extends SketchCollector {

    static CONFIG = {
        id: "hawego",
        name: "Hawego",
        description: "i18n.collectors.hawego.description",
        version: "0",
        website: "https://www.hawego.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153605.jpg",
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
        entryUrl: "https://www.hawego.de/account",
    }

    constructor() {
        super(HawegoCollector.CONFIG);
    }
}
