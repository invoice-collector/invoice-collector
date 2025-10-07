
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SauberEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "sauber_energie",
        name: "Sauber Energie",
        description: "i18n.collectors.sauber_energie.description",
        version: "0",
        website: "https://onlineservice.service-rz.de/?act=login&werknr=18&tid=a0710196399aa100bcff4f280f19801f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14818.jpg",
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
        entryUrl: "https://onlineservice.service-rz.de/?act=login&werknr=18&tid=a0710196399aa100bcff4f280f19801f",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SauberEnergieCollector.CONFIG);
    }
}
