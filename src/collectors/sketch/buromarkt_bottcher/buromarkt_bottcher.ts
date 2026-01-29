
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BuromarktBottcherCollector extends SketchCollector {

    static CONFIG = {
        id: "buromarkt_bottcher",
        name: "Buromarkt Bottcher",
        description: "i18n.collectors.buromarkt_bottcher.description",
        version: "0",
        website: "https://www.bueromarkt-ag.de/mein_konto/uebersicht.php?kontolink=meine_bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53506.jpg",
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
        loginUrl: "https://www.bueromarkt-ag.de/mein_konto/uebersicht.php?kontolink=meine_bestellungen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BuromarktBottcherCollector.CONFIG);
    }
}
