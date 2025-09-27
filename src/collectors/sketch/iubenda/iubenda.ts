
import { SketchCollector } from '../../sketchCollector';

export class IubendaCollector extends SketchCollector {

    static CONFIG = {
        id: "iubenda",
        name: "Iubenda",
        description: "i18n.collectors.iubenda.description",
        version: "0",
        website: "https://www.iubenda.com/en/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19380.jpg",
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
        entryUrl: "https://www.iubenda.com/en/account",
    }

    constructor() {
        super(IubendaCollector.CONFIG);
    }
}
