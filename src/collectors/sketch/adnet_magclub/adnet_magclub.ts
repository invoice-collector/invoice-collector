
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdnetMagclubCollector extends SketchCollector {

    static CONFIG = {
        id: "adnet_magclub",
        name: "Adnet Magclub",
        description: "i18n.collectors.adnet_magclub.description",
        version: "0",
        website: "https://adnet.magclub.de/de/user/auszahlungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776446.jpg",
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
        entryUrl: "https://adnet.magclub.de/de/user/auszahlungen.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdnetMagclubCollector.CONFIG);
    }
}
