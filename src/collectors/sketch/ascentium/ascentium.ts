
import { SketchCollector } from '../../sketchCollector';

export class AscentiumCollector extends SketchCollector {

    static CONFIG = {
        id: "ascentium",
        name: "Ascentium",
        description: "i18n.collectors.ascentium.description",
        version: "0",
        website: "https://accountbutler.ascentiumcapital.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2408677.jpg",
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
        entryUrl: "https://accountbutler.ascentiumcapital.com/",
    }

    constructor() {
        super(AscentiumCollector.CONFIG);
    }
}
