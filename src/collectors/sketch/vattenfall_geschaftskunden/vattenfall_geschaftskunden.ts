
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VattenfallGeschaftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "vattenfall_geschaftskunden",
        name: "Vattenfall - Geschaftskunden",
        description: "i18n.collectors.vattenfall_geschaftskunden.description",
        version: "0",
        website: "https://service.vattenfall.de/vertragskonto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129025.jpg",
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
        entryUrl: "https://service.vattenfall.de/vertragskonto",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VattenfallGeschaftskundenCollector.CONFIG);
    }
}
