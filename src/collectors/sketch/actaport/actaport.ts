
import { SketchCollector } from '../../sketchCollector';

export class ActaportCollector extends SketchCollector {

    static CONFIG = {
        id: "actaport",
        name: "actaport",
        description: "i18n.collectors.actaport.description",
        version: "0",
        website: "https://app.actaport.de/rechnungen/uebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1980354.jpg",
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
        entryUrl: "https://app.actaport.de/rechnungen/uebersicht",
    }

    constructor() {
        super(ActaportCollector.CONFIG);
    }
}
