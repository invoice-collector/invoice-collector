
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OnlineprohsSchmidtMgDeCollector extends SketchCollector {

    static CONFIG = {
        id: "onlineprohs_schmidt_mg_de",
        name: "onlineprohs.schmidt-mg.de",
        description: "i18n.collectors.onlineprohs_schmidt_mg_de.description",
        version: "0",
        website: "https://onlineprohs.schmidt-mg.de/hs/kontoauszug.csp?getPerfacto=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2077745.jpg",
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
        entryUrl: "https://onlineprohs.schmidt-mg.de/hs/kontoauszug.csp?getPerfacto=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnlineprohsSchmidtMgDeCollector.CONFIG);
    }
}
