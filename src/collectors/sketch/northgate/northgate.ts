
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NorthgateCollector extends SketchCollector {

    static CONFIG = {
        id: "northgate",
        name: "Northgate",
        description: "i18n.collectors.northgate.description",
        version: "0",
        website: "https://services.intralinks.com/branding/4461927055/?status=LOGIN&clientID=4461927055",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49704.jpg",
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
        entryUrl: "https://services.intralinks.com/branding/4461927055/?status=LOGIN&clientID=4461927055",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NorthgateCollector.CONFIG);
    }
}
