
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BamboohrCollector extends SketchCollector {

    static CONFIG = {
        id: "bamboohr",
        name: "BambooHR",
        description: "i18n.collectors.bamboohr.description",
        version: "0",
        website: "http://www.bamboohr.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43568.jpg",
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
        entryUrl: "http://www.bamboohr.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BamboohrCollector.CONFIG);
    }
}
