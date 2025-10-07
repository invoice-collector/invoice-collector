
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Recht247Collector extends SketchCollector {

    static CONFIG = {
        id: "recht24_7",
        name: "recht24-7",
        description: "i18n.collectors.recht24_7.description",
        version: "0",
        website: "http://www.recht24-7.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/234327.jpg",
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
        entryUrl: "http://www.recht24-7.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Recht247Collector.CONFIG);
    }
}
