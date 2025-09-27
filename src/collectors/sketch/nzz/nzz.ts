
import { SketchCollector } from '../../sketchCollector';

export class NzzCollector extends SketchCollector {

    static CONFIG = {
        id: "nzz",
        name: "NZZ",
        description: "i18n.collectors.nzz.description",
        version: "0",
        website: "https://abo.nzz.ch/benutzerkonto/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1577621.jpg",
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
        entryUrl: "https://abo.nzz.ch/benutzerkonto/rechnungen/",
    }

    constructor() {
        super(NzzCollector.CONFIG);
    }
}
