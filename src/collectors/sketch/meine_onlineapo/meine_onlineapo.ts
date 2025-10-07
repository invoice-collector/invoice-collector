
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MeineOnlineapoCollector extends SketchCollector {

    static CONFIG = {
        id: "meine_onlineapo",
        name: "Meine OnlineApo",
        description: "i18n.collectors.meine_onlineapo.description",
        version: "0",
        website: "https://www.meine-onlineapo.de/kundenbereich/bestellungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4465144.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.meine-onlineapo.de/kundenbereich/bestellungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeineOnlineapoCollector.CONFIG);
    }
}
