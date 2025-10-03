
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EServiceCheckCollector extends SketchCollector {

    static CONFIG = {
        id: "e_service_check",
        name: "E-Service-Check",
        description: "i18n.collectors.e_service_check.description",
        version: "0",
        website: "https://kundenportal.e-service-check.de/index.php/apps/files/?dir=/360%C2%B0%20Psychotherapie&fileid=303557",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375506.jpg",
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
        entryUrl: "https://kundenportal.e-service-check.de/index.php/apps/files/?dir=/360%C2%B0%20Psychotherapie&fileid=303557",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EServiceCheckCollector.CONFIG);
    }
}
