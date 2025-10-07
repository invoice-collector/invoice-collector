
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GetaroundCollector extends SketchCollector {

    static CONFIG = {
        id: "getaround",
        name: "Getaround",
        description: "i18n.collectors.getaround.description",
        version: "0",
        website: "https://at.getaround.com/dashboard/payments?role=driver",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1476028.jpg",
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
        entryUrl: "https://at.getaround.com/dashboard/payments?role=driver",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GetaroundCollector.CONFIG);
    }
}
