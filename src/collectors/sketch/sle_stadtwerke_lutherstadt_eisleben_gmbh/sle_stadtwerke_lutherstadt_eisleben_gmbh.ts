
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SleStadtwerkeLutherstadtEislebenGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "sle_stadtwerke_lutherstadt_eisleben_gmbh",
        name: "SLE Stadtwerke Lutherstadt Eisleben GmbH",
        description: "i18n.collectors.sle_stadtwerke_lutherstadt_eisleben_gmbh.description",
        version: "0",
        website: "https://kundenportal.sle24.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040957.jpg",
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
        entryUrl: "https://kundenportal.sle24.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SleStadtwerkeLutherstadtEislebenGmbhCollector.CONFIG);
    }
}
