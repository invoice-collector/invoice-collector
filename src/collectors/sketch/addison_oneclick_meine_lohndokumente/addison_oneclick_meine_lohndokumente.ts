
import { SketchCollector } from '../../sketchCollector';

export class AddisonOneclickMeineLohndokumenteCollector extends SketchCollector {

    static CONFIG = {
        id: "addison_oneclick_meine_lohndokumente",
        name: "Addison OneClick - Meine Lohndokumente",
        description: "i18n.collectors.addison_oneclick_meine_lohndokumente.description",
        version: "0",
        website: "https://www.one-click.de/html/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/154987.jpg",
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
        entryUrl: "https://www.one-click.de/html/",
    }

    constructor() {
        super(AddisonOneclickMeineLohndokumenteCollector.CONFIG);
    }
}
