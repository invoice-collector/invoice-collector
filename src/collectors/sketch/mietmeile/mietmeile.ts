
import { SketchCollector } from '../../sketchCollector';

export class MietmeileCollector extends SketchCollector {

    static CONFIG = {
        id: "mietmeile",
        name: "Mietmeile",
        description: "i18n.collectors.mietmeile.description",
        version: "0",
        website: "https://www.mietmeile.de/intern/konto/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1209106.jpg",
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
        entryUrl: "https://www.mietmeile.de/intern/konto/rechnungen",
    }

    constructor() {
        super(MietmeileCollector.CONFIG);
    }
}
