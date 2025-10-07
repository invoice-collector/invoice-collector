
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaingauEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "maingau_energie",
        name: "MAINGAU Energie",
        description: "i18n.collectors.maingau_energie.description",
        version: "0",
        website: "https://onlineservice.service-rz.de/?act=login&werknr=52&tid=19739fd31cbf3f5fe3764e6b03128f5e#email",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28835.jpg",
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
        entryUrl: "https://onlineservice.service-rz.de/?act=login&werknr=52&tid=19739fd31cbf3f5fe3764e6b03128f5e#email",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaingauEnergieCollector.CONFIG);
    }
}
