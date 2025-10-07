
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NetzplusservicePlusportalCollector extends SketchCollector {

    static CONFIG = {
        id: "netzplusservice_plusportal",
        name: "netzplusservice plusportal",
        description: "i18n.collectors.netzplusservice_plusportal.description",
        version: "0",
        website: "https://netzplusservice.plusportal.de/#/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1754245.jpg",
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
        entryUrl: "https://netzplusservice.plusportal.de/#/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetzplusservicePlusportalCollector.CONFIG);
    }
}
