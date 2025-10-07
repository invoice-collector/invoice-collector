
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FritzBergerCollector extends SketchCollector {

    static CONFIG = {
        id: "fritz_berger",
        name: "Fritz Berger",
        description: "i18n.collectors.fritz_berger.description",
        version: "0",
        website: "https://www.fritz-berger.de/meinkonto/meinebestellungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1217591.jpg",
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
        entryUrl: "https://www.fritz-berger.de/meinkonto/meinebestellungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FritzBergerCollector.CONFIG);
    }
}
