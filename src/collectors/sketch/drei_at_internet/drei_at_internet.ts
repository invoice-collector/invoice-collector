
import { SketchCollector } from '../../sketchCollector';

export class DreiAtInternetCollector extends SketchCollector {

    static CONFIG = {
        id: "drei_at_internet",
        name: "Drei.at - Internet",
        description: "i18n.collectors.drei_at_internet.description",
        version: "0",
        website: "http://kundenzone.drei.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222124.jpg",
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
        entryUrl: "http://kundenzone.drei.at/",
    }

    constructor() {
        super(DreiAtInternetCollector.CONFIG);
    }
}
