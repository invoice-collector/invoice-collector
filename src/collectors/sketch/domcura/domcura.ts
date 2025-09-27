
import { SketchCollector } from '../../sketchCollector';

export class DomcuraCollector extends SketchCollector {

    static CONFIG = {
        id: "domcura",
        name: "Domcura",
        description: "i18n.collectors.domcura.description",
        version: "0",
        website: "http://www.domcura.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30946.jpg",
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
        entryUrl: "http://www.domcura.de",
    }

    constructor() {
        super(DomcuraCollector.CONFIG);
    }
}
