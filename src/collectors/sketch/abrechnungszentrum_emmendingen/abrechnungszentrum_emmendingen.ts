
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AbrechnungszentrumEmmendingenCollector extends SketchCollector {

    static CONFIG = {
        id: "abrechnungszentrum_emmendingen",
        name: "Abrechnungszentrum Emmendingen",
        description: "i18n.collectors.abrechnungszentrum_emmendingen.description",
        version: "0",
        website: "https://www.mein-le-portal.de/helic-arze-leportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3119293.jpg",
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
        entryUrl: "https://www.mein-le-portal.de/helic-arze-leportal/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AbrechnungszentrumEmmendingenCollector.CONFIG);
    }
}
