
import { SketchCollector } from '../../sketchCollector';

export class BellenNlCollector extends SketchCollector {

    static CONFIG = {
        id: "bellen_nl",
        name: "Bellen.nl",
        description: "i18n.collectors.bellen_nl.description",
        version: "0",
        website: "https://translate.google.ro/translate?hl=ro&sl=nl&tl=ro&u=http%3A%2F%2Fforum.bellen.com%2F&anno=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9021.jpg",
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
        entryUrl: "https://translate.google.ro/translate?hl=ro&sl=nl&tl=ro&u=http%3A%2F%2Fforum.bellen.com%2F&anno=2",
    }

    constructor() {
        super(BellenNlCollector.CONFIG);
    }
}
