
import { SketchCollector } from '../../sketchCollector';

export class GebrReinhardCollector extends SketchCollector {

    static CONFIG = {
        id: "gebr_reinhard",
        name: "Gebr. Reinhard",
        description: "i18n.collectors.gebr_reinhard.description",
        version: "0",
        website: "https://shop.reinhard-stahl.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/427330.jpg",
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
        entryUrl: "https://shop.reinhard-stahl.de/",
    }

    constructor() {
        super(GebrReinhardCollector.CONFIG);
    }
}
