
import { SketchCollector } from '../../sketchCollector';

export class SquadcastCollector extends SketchCollector {

    static CONFIG = {
        id: "squadcast",
        name: "Squadcast",
        description: "i18n.collectors.squadcast.description",
        version: "0",
        website: "https://app.squadcast.fm/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347338.jpg",
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
        entryUrl: "https://app.squadcast.fm/account/billing",
    }

    constructor() {
        super(SquadcastCollector.CONFIG);
    }
}
