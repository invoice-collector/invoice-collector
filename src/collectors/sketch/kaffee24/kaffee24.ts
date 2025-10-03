
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Kaffee24Collector extends SketchCollector {

    static CONFIG = {
        id: "kaffee24",
        name: "Kaffee24",
        description: "i18n.collectors.kaffee24.description",
        version: "0",
        website: "https://www.kaffee24.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1324814.jpg",
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
        entryUrl: "https://www.kaffee24.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Kaffee24Collector.CONFIG);
    }
}
