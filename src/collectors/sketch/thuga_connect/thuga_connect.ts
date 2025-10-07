
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ThugaConnectCollector extends SketchCollector {

    static CONFIG = {
        id: "thuga_connect",
        name: "Thuga Connect",
        description: "i18n.collectors.thuga_connect.description",
        version: "0",
        website: "https://thuegaconnect.plusportal.de/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72446.jpg",
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
        entryUrl: "https://thuegaconnect.plusportal.de/#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThugaConnectCollector.CONFIG);
    }
}
