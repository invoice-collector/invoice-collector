
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InforCollector extends SketchCollector {

    static CONFIG = {
        id: "infor",
        name: "infor",
        description: "i18n.collectors.infor.description",
        version: "0",
        website: "http://www.infor.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/554.jpg",
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
        entryUrl: "http://www.infor.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InforCollector.CONFIG);
    }
}
