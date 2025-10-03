
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class M2mMobilDrillischCollector extends SketchCollector {

    static CONFIG = {
        id: "m2m_mobil_drillisch",
        name: "m2m Mobil - Drillisch",
        description: "i18n.collectors.m2m_mobil_drillisch.description",
        version: "0",
        website: "https://service.m2m-mobil.de/mytariff/invoice/showAll",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747321.jpg",
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
        entryUrl: "https://service.m2m-mobil.de/mytariff/invoice/showAll",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(M2mMobilDrillischCollector.CONFIG);
    }
}
