
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SachsennetCollector extends SketchCollector {

    static CONFIG = {
        id: "sachsennet",
        name: "SachsenNet",
        description: "i18n.collectors.sachsennet.description",
        version: "0",
        website: "https://sachsennet.plusportal.de/#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534059.jpg",
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
        entryUrl: "https://sachsennet.plusportal.de/#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SachsennetCollector.CONFIG);
    }
}
