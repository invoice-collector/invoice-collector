
import { SketchCollector } from '../../sketchCollector';

export class SteuerakademieHessenCollector extends SketchCollector {

    static CONFIG = {
        id: "steuerakademie_hessen",
        name: "Steuerakademie Hessen",
        description: "i18n.collectors.steuerakademie_hessen.description",
        version: "0",
        website: "https://steuerakademie-hessen.de/kundenkontogesamtuebersicht/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/753064.jpg",
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
        entryUrl: "https://steuerakademie-hessen.de/kundenkontogesamtuebersicht/",
    }

    constructor() {
        super(SteuerakademieHessenCollector.CONFIG);
    }
}
