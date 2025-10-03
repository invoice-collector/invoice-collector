
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GrundsteuerDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "grundsteuer_digital",
        name: "Grundsteuer Digital",
        description: "i18n.collectors.grundsteuer_digital.description",
        version: "0",
        website: "https://login.grundsteuer-digital.de/#/setting/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1233731.jpg",
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
        entryUrl: "https://login.grundsteuer-digital.de/#/setting/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrundsteuerDigitalCollector.CONFIG);
    }
}
