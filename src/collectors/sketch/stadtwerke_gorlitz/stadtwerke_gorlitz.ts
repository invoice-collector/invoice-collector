
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeGorlitzCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_gorlitz",
        name: "Stadtwerke Gorlitz",
        description: "i18n.collectors.stadtwerke_gorlitz.description",
        version: "0",
        website: "https://digitaldirect.plusportal.de/#/devices/dsl/61841/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863169.jpg",
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
        entryUrl: "https://digitaldirect.plusportal.de/#/devices/dsl/61841/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeGorlitzCollector.CONFIG);
    }
}
