
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeEinbeckCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_einbeck",
        name: "Stadtwerke Einbeck",
        description: "i18n.collectors.stadtwerke_einbeck.description",
        version: "0",
        website: "http://www.stadtwerke-einbeck.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9266.jpg",
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
        entryUrl: "http://www.stadtwerke-einbeck.de",
    }

    constructor() {
        super(StadtwerkeEinbeckCollector.CONFIG);
    }
}
