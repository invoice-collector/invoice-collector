
import { SketchCollector } from '../../sketchCollector';

export class FoursixtyCollector extends SketchCollector {

    static CONFIG = {
        id: "foursixty",
        name: "Foursixty",
        description: "i18n.collectors.foursixty.description",
        version: "0",
        website: "https://foursixty.com/dashboard/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51054.jpg",
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
        entryUrl: "https://foursixty.com/dashboard/login/",
    }

    constructor() {
        super(FoursixtyCollector.CONFIG);
    }
}
