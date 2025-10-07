
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VairsicherungInsurgoCollector extends SketchCollector {

    static CONFIG = {
        id: "vairsicherung_insurgo",
        name: "Vairsicherung - Insurgo",
        description: "i18n.collectors.vairsicherung_insurgo.description",
        version: "0",
        website: "https://vairsicherung.insurgo.cloud/dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4231178.jpg",
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
        entryUrl: "https://vairsicherung.insurgo.cloud/dokumente",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VairsicherungInsurgoCollector.CONFIG);
    }
}
